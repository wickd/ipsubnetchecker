// module dependencies.
let express = require('express');
let routes = require('./app/routes');
let path = require('path');
let bodyParser = require('body-parser');

// init express app.
let app = express();

// setup express view engine.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources', 'views'));
// to support JSON-encoded bodies
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// connect routes.
app.use('/', routes);

// start the server..
app.listen(3000, () => {
    console.log('Started server on http://localhost:3000/');
});

module.exports = app;