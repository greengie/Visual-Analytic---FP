// Define the functions that will be called
// when someone accesses the route on our
// api
//============================
const rFunction = require('../regression-function.js');
const pgp = require('pg-promise')();
const db = require('../config/db');
const atob = require('atob');
// connection to postgresql
const Subjects = pgp(db.urlSubjectViews);
const PythonShell = require('python-shell');
// const multer = require('multer');
// const maxsize = 25000000; //limit 25 mb
// const upload = multer({dest: 'uploads/', limits:{fileSize: maxsize}})
const fs = require('fs');

exports.data = function(req, res, next) {
  // console.log(req.params.selector)
  var year = req.params.year;
  var selector = req.params.selector;
  var scale = req.params.scale;
  Subjects.any("select iso_alpha3 as country_code, country_list.country_name, year, value as data_value, cont_color as color from $2~, country_list where ($2~.country_name = country_list.country_name) and (year = $1) and (value is not null)", [year, selector])
    .then(function (result) {
      var log_result = result;
      if(scale == "log"){
        for(var i=0;i < result.length;i++){
          if(result[i].data_value >= 1){
            log_result[i].data_value = (Math.log(result[i].data_value))/(Math.log(2));
          }
          else{
            log_result[i].data_value = (result[i].data_value);
          }
        }
        // console.log(log_result);
        res.status(200).json(log_result);
      }
      else if(scale == "lin"){
        // console.log(result);
        res.status(200).json(result);
      }
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
}

exports.country = function(req, res, next){
  Subjects.any("select country_name,iso_alpha3 as country_code from country_list")
    .then(function (result) {
      // console.log(result);
      res.status(200).json(result);
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
}

exports.data_migration = function(req, res, next) {
  var year = req.params.year;
  var selector = req.params.selector;
  Subjects.any("select iso_alpha3 as country_code, country_name, year, color,$2~ as value from sum_migration where year=$1", [year, selector])
    .then(function (result) {
      // console.log(result);
      res.status(200).json(result);
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
}

exports.world = function(req, res, next){
  Subjects.any("select world from jsonworld where id = 1")
    .then(function (result) {
      // console.log(result);
      res.status(200).json(result[0].world);
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
}

exports.migration_map = function(req, res, next){
  var year = req.params.year;
  Subjects.any("select migration_data.origin_country,migration_data.destination_country,country_code.num_code as id,total from country_list, migration_data, country_code where year=$1 and (country_list.country_name = migration_data.destination_country) and (country_list.iso_alpha3 = country_code.iso_alpha3)", [year])
    .then(function (result) {
      // console.log(result);
      var output = [];
      result.forEach(function(value){
        var dict = {'id': value.id, 'name': value.destination_country.replace(/\s+/g, ''), 'source': {}};
        var existing = output.filter(function(v, i) {
          return v.id == value.id;
        });
        if (existing.length) {
          var existingIndex = output.indexOf(existing[0]);
          output[existingIndex]['source'][value.origin_country.replace(/\s+/g, '')] = parseInt(value.total);
        } else {
          if (typeof value.total == 'string')
            dict['source'][value.origin_country.replace(/\s+/g, '')] = parseInt(value.total);
          output.push(dict);
        }
      });
      res.status(200).json(output);
    })
    .catch(function(error) {
      console.log(error);
      res.status(404).json(error);
    });
}

exports.correlation = function(req, res, next) {
  var options = {
    args: [req.params.yearMin, req.params.yearMax, req.params.selectorX, req.params.selectorY, req.params.scale_x, req.params.scale_y, req.params.query_type]
  };

  var pyshell = new PythonShell('./test.py', options);

  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    d = JSON.stringify(message);
    m = JSON.parse(d);
    obj = eval('(' + m + ')');
    // console.log(obj);
    res.status(200).json(obj);
  });

  pyshell.end(function (err) {
    if (err) throw err;
    // console.log('finished');
  });
}

exports.prediction = function(req, res, next){
  var options = {
    args: [req.params.userid, req.params.fileid]
  };
  var pyshell = new PythonShell('./regression-data.py', options);
  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    d = JSON.stringify(message);
    m = JSON.parse(d);
    obj = eval('(' + m + ')');
    console.log(message);
    res.status(200).json(obj);
  });

  pyshell.end(function (err) {
    if (err) throw err;
    // console.log('finished');
  });
}

exports.checkUserAreInDB = function(req,res,next){
  // console.log(req.body);
  // res.status(200).json({'a': 123});
  Subjects.any("select exists (select true from userdata where id=$1);", [req.body.userID])
    .then(function (result) {
      // console.log(result[0].exists)
      if(result[0].exists === false){
        Subjects.any("insert into userdata values($1,$2,$3,0);", [req.body.userID,req.body.first_name,req.body.last_name])
        .then(function (result1) {
          Subjects.any("select id,first_name,last_name,num_file from userdata where id=$1;", [req.body.userID])
          .then(function (result2) {
            console.log(result2);
            res.status(200).json(result2);
          })
          .catch(function (error){
            console.log(error);
            res.status(404).json(error);
          });
        })
        .catch(function (error){
          console.log(error);
          res.status(404).json(error);
        });
      }
      else{
        Subjects.any("select id,first_name,last_name,num_file from userdata where id=$1;", [req.body.userID])
        .then(function (result3) {
          console.log(result3);
          res.status(200).json(result3);
        })
        .catch(function (error){
          console.log(error);
          res.status(404).json(error);
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
  // console.log(res);
  // console.log(next);
}

exports.uploadCSV = function(req, res, next){
  // console.log(req.files[0]);
  // console.log(typeof req.body.file_num === 'string');
  // var update_file_num = req.body.file_num+1;
  var dir = './uploads/'+req.body.fileid;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    if (!fs.existsSync(dir+'/file')){
      fs.mkdirSync(dir+'/file');
    }
    if (!fs.existsSync(dir+'/cor-data')){
      fs.mkdirSync(dir+'/cor-data');
    }
  }

  fs.writeFile(dir+'/file/'+req.body.filename, req.body.data_text, function(err) {
    if(err) {
      console.log(err);
      res.status(404).json(err);
    }
    else{
      var file_path = '/home/giegie/mytest/test-api-scatter/server/uploads/'
      var options = {
        args: [file_path, req.body.fileid, req.body.filename]
      };

      var pyshell = new PythonShell('./get-cor-matrix.py', options);

      pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        // d = JSON.stringify(message);
        // m = JSON.parse(d);
        // obj = eval('(' + m + ')');
        console.log(message);
      });

      pyshell.end(function (err) {
        if (err) throw err;
        console.log('finished-correaltion-matrix');
      });
      // update userdata
      Subjects.any("update userdata set num_file=$1 where id=$2", [parseInt(req.body.file_num)+1,req.body.fileid])
      .then(function (result) {
        res.status(200).json(parseInt(req.body.file_num)+1);
      })
      .catch(function (error){
        console.log(error);
        res.status(404).json(error);
      });

      console.log("The file was saved!");
    }
  });
}

exports.getFileLimit = function(req, res, next){
  var id = req.params.id;
  Subjects.any("select num_file from userdata where id=$1", [id])
    .then(function (result) {
      res.status(200).json(result);
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
}

exports.getFileList = function(req, res, next) {
  var id = req.params.id;
  var upload_path = '/home/giegie/mytest/test-api-scatter/server/uploads/'
  var result = _getAllFilesFromFolder(upload_path + id +'/file');
  res.status(200).json(result);
}

exports.calculateRegression = function(req, res, next) {
  var label_x = req.params.label_x;
  var label_y = req.params.label_y;
  console.log(label_x);
  console.log(label_y);
  // console.log(req.body.data[label_x]);
  var dataX = [];
  for(var i=0;i<req.body.data[label_x].length;i++){
    var value = Math.pow(10, req.body.data[label_x][i]);
    dataX.push(value);
  }
  var predictionData = rFunction.regressionFunction(label_x, label_y, dataX);
  // console.log(predictionData);
  res.status(200).json(predictionData);
}


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(my_file) {

        file = dir+'/'+my_file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(my_file);

    });

    return results;

};
