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
  apiRoutes.get('/:selector/:year', _ourController.data);
  apiRoutes.get('/m_in/:selector/:year', _ourController.migration_in);
  apiRoutes.get('/m_out/:selector/:year', _ourController.migration_out);
  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:3000/api
  app.use('/api', apiRoutes);
}
