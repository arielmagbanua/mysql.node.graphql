const express = require('express');
const bodyParser = require('body-parser');

const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

// routes
const applicationRoutes = require('./routes/app');

const app = express();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('zest', 'homestead', 'secret', {
  host: '192.168.10.10',
  dialect: 'mysql',
});

// parse request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(applicationRoutes);

app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
}));

app.listen(8080, () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
});
