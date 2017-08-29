let route = require('express').Router();

route.get('/', (req, res) => {
    return res.render('home');
});

route.get('/test-task', (req, res) =>
{
    return res.render('test-task');
});

route.get('/about', (req, res) =>
{
    return res.render('about');
});

route.get('/contact', (req, res) =>
{
    return res.render('contact');
});

module.exports = route;