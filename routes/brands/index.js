const brands = require('express').Router();
const all = require('./all');
const data = require('../../data/brands.json');
const single = require('./single');

brands.get('/', all);

module.exports = brands;

brands.get('/:path', single);

brands.param('path', (req, res, next, value) => {
  const brand = data.brands.find(m => m.path === (value));
  if (brand) {
    req['brand'] = brand;
    next();
  } else {
    res.status(404).send('No brands');
  }
});
