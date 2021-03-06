const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

// routes
const applicationRoutes = require('./routes/app');

const app = express();
const { sequelize } = require('./models/db');

app.use(cors());

// parse request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(applicationRoutes);

app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true,
}));

app.listen(8823, () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
});
