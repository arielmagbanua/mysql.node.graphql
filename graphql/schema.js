const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Product {
    sku: ID!
    description: String
    title: String!
    template_page: String
    comment: String
    comment_right: String
    thumb: String
    image: String
    price: Float!
    advanced_pricing: Int
    wholesale: String
    tax_category: String
    nontaxable: String
    weight: String!
    size: String
    color: String
    option_type: String
    options_advanced: Int
    gift_cert: String
    related: String
    featured: String
    download: String
    dl_type: String
    dl_location: String
    inactive: Int!
    url: String
    sale_price: String
    image_large: String
    prod_discount: Float
    prod_teaser: String
    display_site: String
    meta_key_words: String
    meta_page_title: String
    meta_desc: String
    extended: String
    product_type: String!
    url_override: String
    slug: String
    last_modified: String
    priority: String
    access_control: Int
    supplier: Int
  }
  
  type RootQuery {
    products: [Product]!
  }
  
  schema {
    query: RootQuery
  }
`);
