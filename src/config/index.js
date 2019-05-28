import dotenv from 'dotenv';
import joi from 'joi';

dotenv.config();

const envVarsSchema = joi
  .object({
    GRPC_PORT: joi.number().default(50051),
    GRPC_HOST: joi.string().default('localhost'),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  grpcPort: envVars.GRPC_PORT,
  grpcHost: envVars.GRPC_HOST,
};

export default config;
