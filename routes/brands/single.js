const data = require('../../brands.json');

module.exports = (req, res) => {
  const path = req.params.path;
  const brand = data.brands.find(m => m.path === path);

  res.status(200).json({ brand });
};