const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Product {
    sku: ID!
    description: String
    title: String!
    comment: String
    price: Float!
    weight: Float!
  }
  
  type TestData {
    text: String!
    views: Int!
  }
  
  type RootQuery {
    hello: TestData!
    products: [Product]!
  }
  
  schema {
    query: RootQuery
  }
`);
