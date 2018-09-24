const data = require('../../brands.json');

module.exports = (req, res) => {
  const brands = data.brands;

  res.status(200).json({ brands });
};
