//============================
// Define the functions that will be called
// when someone accesses the route on our
// api
//============================
const pgp = require('pg-promise')();
const db = require('../config/db');
const Subjects = pgp(db.urlSubjectViews);

exports.data = function(req, res, next) {
  // console.log(req.params.selector)
  var year = req.params.year;
  var selector = req.params.selector;
  Subjects.any("select iso_alpha3 as country_code, country_list.country_name, year, value as data_value from $2~, country_list where ($2~.country_name = country_list.country_name) and (year = $1) and (value is not null)", [year, selector])
    .then(function (result) {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(function (error) {
      console.log(error);
      res.status(404).json(error);
    });
}

// exports.popdensity = function(req, res, next) {
//   var year = req.params.year;
//   Subjects.any("select iso_alpha3 as country_code, country_list.country_name, year, value as popdensity from popdensity, country_list where (popdensity.country_name = country_list.country_name) and (year = $1)", year)
//     .then(function (result) {
//       console.log(result);
//       res.status(200).json(result);
//     })
//     .catch(function (error) {
//       console.log(error);
//       res.status(404).json(error);
//     });
// }
