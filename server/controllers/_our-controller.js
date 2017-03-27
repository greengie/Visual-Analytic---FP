//============================
// Define the functions that will be called
// when someone accesses the route on our
// api
//============================
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
  var pyshell = new PythonShell('./run-model.py');
  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    // d = JSON.stringify(message);
    // m = JSON.parse(d);
    // obj = eval('(' + m + ')');
    console.log(message);
    // res.status(200).json(message);
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
  }

  fs.writeFile(dir+'/'+req.body.filename, req.body.data_text, function(err) {
    if(err) {
      console.log(err);
      res.status(404).json(err);
    }
    else{
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
