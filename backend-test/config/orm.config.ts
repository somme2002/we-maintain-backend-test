import { ConnectionOptions } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PW } = process.env;
const ORM_CONFIG = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt('54320', 10),
  username: 'postgres_user',
  password: 'postgres_password',
  database: 'postgres_database',
  synchronize: true, // set this to false for production. To use migrations in production, do it manually(read docs in README.md)
  logging: true,
  entities: [`${__dirname}/../**/*.model.*`],
} as ConnectionOptions;

export default ORM_CONFIG;