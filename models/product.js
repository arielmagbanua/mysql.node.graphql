const {
  sequelize,
  Sequelize,
} = require('./db');

const Product = sequelize.define('products', {
  sku: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  description: Sequelize.TEXT,
  title: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  template_page: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  comment: Sequelize.TEXT,
  comment_right: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  thumb: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0.00,
  },
  advanced_pricing: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  wholesale: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  tax_category: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  nontaxable: {
    type: Sequelize.CHAR,
    defaultValue: null,
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '0',
  },
  size: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  option_type: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  options_advanced: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  gift_cert: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  related: Sequelize.TEXT,
  featured: {
    // eslint-disable-next-line new-cap
    type: Sequelize.STRING(32),
    defaultValue: null,
  },
  download: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  dl_type: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  dl_location: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  inactive: {
    type: Sequelize.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  url: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  sale_price: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  image_large: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  prod_discount: {
    // eslint-disable-next-line new-cap
    type: Sequelize.DECIMAL(12, 2),
    defaultValue: null,
  },
  prod_teaser: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  display_site: {
    type: Sequelize.STRING,
    defaultValue: 'gizmos2',
  },
  meta_key_words: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  meta_page_title: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  meta_desc: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  extended: Sequelize.TEXT,
  product_type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Physical',
  },
  url_override: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  slug: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  last_modified: {
    type: Sequelize.TIME,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  priority: {
    // eslint-disable-next-line new-cap
    type: Sequelize.STRING(6),
    defaultValue: null,
  },
  access_control: {
    // eslint-disable-next-line new-cap
    type: Sequelize.TINYINT(4),
    allowNull: false,
    defaultValue: 0,
  },
  supplier: {
    // eslint-disable-next-line new-cap
    type: Sequelize.INTEGER(5),
    defaultValue: null,
  },
});

module.exports = Product;
