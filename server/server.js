const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expressGraphQl = require('express-graphql');
const GraphQlSchema = require('./graphqlSchema');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOOSE_URL = process.env.DB;
app.use(cors());

//connecting to the DB
mongoose.connect(
  MONGOOSE_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('Mongose Connected');
  }
);

//GraphQL Route
app.use('/graphql', expressGraphQl({ graphiql: true, schema: GraphQlSchema }));

//Starting the server
app.listen(PORT, () => {
  console.log('Server Started port:' + PORT);
});
