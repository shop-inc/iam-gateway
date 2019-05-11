import dotenv from 'dotenv';
import joi from 'joi';

dotenv.config();

const envVarsSchema = joi
  .object({
    PORT: joi.number().default(8080),
    GRPC_PORT: joi.number().default(50051),
    GRPC_HOST: joi.string().default('localhost'),
    NODE_ENV: joi
      .string()
      .allow(['development', 'test', 'staging'])
      .required(),
    GOOGLE_AUTH_TOKEN: joi.string().required(),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  port: envVars.PORT || 8000,
  grpcPort: envVars.GRPC_PORT,
  grpcHost: envVars.GRPC_HOST,
  env: envVars.NODE_ENV || 'development',
  googleAuthToken: envVars.GOOGLE_AUTH_TOKEN,
};

export default config;
