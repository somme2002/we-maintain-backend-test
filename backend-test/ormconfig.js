require('dotenv').config({ path: './docker/.devconfig.env' });

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PW } = process.env;
module.exports = [
  {
    type: 'postgres',
    host: 'localhost',
    port: parseInt('54320', 10),
    username: 'postgres_user',
    password: 'postgres_password',
    database: 'postgres_database',
    autoSchemaSync: false,
    entities: [`./**/*.model{.ts,.js}`],
    migrations: ['src/migration/*.ts'],
    cli: {
      migrationsDir: 'src/migration',
    },
  },
];