const Product = require('../models/product');

module.exports = {
  hello() {
    return {
      text: 'Hello World',
      views: 900,
    };
  },
  async products() {
    return Product.findAll().then((products) => {
      console.log(products);
      return products;
    });
  },
};
