const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,   
  graphiql: true
}));

app.listen(4000, () => {
    console.log('listning port:4000')
});
