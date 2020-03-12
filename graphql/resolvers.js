const Product = require('../models/product');

module.exports = {
  async products() {
    return Product.findAll();
  },
  async createProduct(args, req) {
    return Product.create(args.productInput);
  },
};
