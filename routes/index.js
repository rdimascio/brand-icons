const routes = require('express').Router()
const data = require('../data/brands.json')
const single = require('./single')

routes.get('/:path', single)

routes.use('/', single)

routes.param('path', (req, res, next, value) => {
  const brand = data.brands.find(m => m.path === (value))
  if (brand) {
    req['brand'] = brand
    next()
  } else {
    res.status(404).send('No brands')
  }
})

module.exports = routes

// const brands = require('./brands')

// routes.use('/brands', brands)
