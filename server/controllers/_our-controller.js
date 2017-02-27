//============================
// Define the functions that will be called
// when someone accesses the route on our
// api
//============================
const pgp = require('pg-promise')();
const db = require('../config/db');
const Subjects = pgp(db.urlSubjectViews);
const PythonShell = require('python-shell');

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
