//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');
const _ourController = require('./controllers/_our-controller');
const multer = require('multer');
const maxsize = 25000000; //limit 25 mb
const upload = multer({dest: 'uploads/', limits:{fileSize: maxsize}});

//============================
// Export the api routes
//============================
module.exports = function(app) {

  //create the router
  const apiRoutes = express.Router();

  //define first router
  apiRoutes.get('/data/:selector/:scale/:year', _ourController.data);
  apiRoutes.get('/data_migration/:selector/:year', _ourController.data_migration);
  apiRoutes.get('/correlation/:selectorX/:selectorY/:yearMin/:yearMax/:scale_x/:scale_y/:query_type', _ourController.correlation);
  apiRoutes.get('/prediction', _ourController.prediction);
  apiRoutes.post('/user', _ourController.checkUserAreInDB);
  apiRoutes.get('/limit/:id', _ourController.getFileLimit);
  apiRoutes.post('/upload', _ourController.uploadCSV);
  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:3000/api
  app.use('/api', apiRoutes);
}
