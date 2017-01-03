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
  apiRoutes.get('/gdp/:year', _ourController.gdp);
  apiRoutes.get('/popdensity/:year', _ourController.popdensity);
  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:3000/api
  app.use('/api', apiRoutes);
}
