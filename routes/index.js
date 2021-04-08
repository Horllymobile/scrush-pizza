var express = require('express');
var router = express.Router();
const { pizzas } = require('./pizza.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pizzas });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/details/:pizzaId', function(req, res, next) {

  const pizza = pizzas.find((pizza) => pizza.id === +req.params.pizzaId)

  res.render('details', { title: 'Detail', pizza});
});

module.exports = router;
