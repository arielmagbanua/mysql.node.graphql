const Product = require('../models/product');
const { v5: uuidv5 } = require('uuid');

module.exports = {
  async deleteProductBySKU({ sku }, req) {
    const product = await Product.findByPk(sku);
    if (product) {
      const deleted = await product.destroy();
      return !!deleted;
    }

    return false;
  },
  async product({ fields }, req) {
    return Product.findOne({
      where: { ...fields },
    });
  },
  async products() {
    return Product.findAll();
  },
  async createProduct({ productInput }, req) {
    const namespace = uuidv5('foo.bar.com', uuidv5.DNS);

    // generate random unique sku
    productInput.sku = uuidv5(productInput.title + Date.now(), namespace);

    return Product.create(productInput)
      .then((product) => {
        return product;
      }).catch((err) => console.log(err));
  },
};

