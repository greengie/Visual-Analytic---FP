//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');
const _ourController = require('./controllers/_our-controller');

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
  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:3000/api
  app.use('/api', apiRoutes);
}
