// Credit to Robin Wieruch's excellent Graphql tutorial for the boilerplate walkthrough
// Tutorial: https://www.robinwieruch.de/graphql-apollo-server-tutorial

// Package imports
// NOTE: KEEP DOTENV AS FIRST IMPORT :D
import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

// Local imports
import db from './db/run';
import schema from './src/schema/_index';
import resolvers from './src/resolvers/_index';

const app = express();

// Deconstruct ENV vars for brevity
const { ROOT_ENDPOINT, PORT } = process.env

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
      db,
  }
});

server.applyMiddleware({ app, path: ROOT_ENDPOINT });

app.listen({ port: PORT }, () => {
    console.log(`Server is running at http://localhost:${PORT}${ROOT_ENDPOINT}`);
});
