"use strict";
require('dotenv').config();
module.exports = {
    development: {
        url: process.env.DEV_DB,
        dialect: "postgres",
        logging: false
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
};
