import grpc from 'grpc';
import envConfig from '../config';

const {
  grpcHost, grpcPort,
} = envConfig;

const PROTO_PATH = './protobuf/identity.proto';
const { IdentityService } = grpc.load(PROTO_PATH);
const client = new IdentityService(`${grpcHost}:${grpcPort}`, grpc.credentials.createInsecure());

export default client;
