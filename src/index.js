import { GraphQLServer } from 'graphql-yoga';
import debug from 'debug';
import net from 'net';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolver';
import envConfig from './config';

const {
  grpcHost, grpcPort,
} = envConfig;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const logger = debug('Shopinc:client');

const testConnection = () => new Promise((resolve, reject) => {
  const connection = new net.Socket();
  connection.connect(grpcPort, grpcHost, () => {
    resolve(`Client connected to: ${grpcHost}:${grpcPort}`);
  });
  connection.on('error', (err) => {
    reject(err);
  });
});

const conn = async () => {
  try {
    logger('Creating the grpc server conncetion...');
    const tests = await testConnection();
    logger(tests);

    server.start(
      () => logger(
        'Gateway is running 🚀',
      ),
    );
  } catch (error) {
    throw new Error(error.toString());
  }
};

conn();
