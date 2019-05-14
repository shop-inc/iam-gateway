import { GraphQLServer } from 'graphql-yoga';
import debug from 'debug';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolver';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const logger = debug('log');

server.start(
  () => logger(
    'Server is running on http://localhost:4000',
  ),
);
