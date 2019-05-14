import grpc from 'grpc';
import { resolve } from 'path';
import envConfig from './config';

const {
  grpcHost, grpcPort,
} = envConfig;

const PROTO_PATH = resolve(__dirname, 'identity.proto');
const { IdentityService } = grpc.load(PROTO_PATH);
const client = new IdentityService(`${grpcHost}:${grpcPort}`, grpc.credentials.createInsecure());

export default client;
