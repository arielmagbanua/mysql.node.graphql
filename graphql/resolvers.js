const Product = require('../models/product');

module.exports = {
  async products() {
    return Product.findAll();
  },
  async createProduct({ productInput }, req) {
    return Product.create(productInput);
  },
};
