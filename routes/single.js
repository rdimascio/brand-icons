const data = require('../data/brands.json')
const path = require('path')

module.exports = (req, res) => {
  const reqpath = req.originalUrl
  // const brand = data.brands.find(m => m.path === reqpath)

  // Not using the brand path, just using what was passed in for now
  res.setHeader('Content-Type', 'image/svg+xml')
  // res.sendFile(path.join(__dirname, '../icons/', reqpath + '.svg'))
  res.status(301).redirect('https://cdn.brandicons.org/icons' + reqpath + '.svg')
  // res.status(200).json({ brand });
}