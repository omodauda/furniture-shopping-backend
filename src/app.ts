import express, { Express } from 'express';
import db from './database/models'

const { sequelize } = db;

const app: Express = express();
const ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

async function initDb() {
  if (ENV === 'development') {
    try {
      await sequelize.authenticate();
      console.log('Database connection established');
    } catch (error) {
      console.error('Unable to connect to database:', error);
    }
  }
}

initDb()

export default app;