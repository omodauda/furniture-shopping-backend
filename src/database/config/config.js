require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DB,
    dialect: 'postgres',
  },
  test: {
    url: '',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: process.env.PROD_DB_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
      },
    },
  },
};
