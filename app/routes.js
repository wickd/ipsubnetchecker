let route = require('express').Router();

// Controllers
let HomeController = require('./controllers/homeController');
let CommonController = require('./controllers/commonController');

// Middlewares
let ipv4Validate = require('./middlewares/ipv4FormValidator');

// Routes
route.get('/', HomeController.index);

route.post('/', ipv4Validate, HomeController.handleCheck);

route.get('/test-task', CommonController.showTestTask);

route.get('/about', CommonController.showAbout);

route.get('/contact', CommonController.showContact);

module.exports = route;