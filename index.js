const { ApolloServer, gql } = require('apollo-server');
const resolverss = require("./resolvers")
const mutations = require("./mutations");
const mongoose = require("mongoose");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

mongoose.connect('mongodb://localhost:27017/covertree_life', {useNewUrlParser: true, useUnifiedTopology: true})
                .then(()=>console.log('mongoose up'))
                .catch(error=>console.log(error.message));

mongoose.Promise = global.Promise;
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Customer {
    _id:ID!
    firstName:String
    lastName:String
    address:String
    unit:String
  }

  type Query {
    books: [Book]
    customers:[Customer]
  }

  type Mutation {
    createCustomer(firstName:String!, lastName:String!, address:String!, unit:String): Customer!
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {...resolverss},
    Mutation:{...mutations}
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
    