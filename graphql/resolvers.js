const Product = require('../models/product');

module.exports = {
  async product({ fields }, req) {
    return Product.findOne({
      where: { ...fields },
    });
  },
  async products() {
    return Product.findAll();
  },
  async createProduct({ productInput }, req) {
    return Product.create(productInput);
  },
};
