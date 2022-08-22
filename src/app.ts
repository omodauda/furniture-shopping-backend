import express, { Express } from 'express';
import routes from './routes';
import errorMiddleware from './middlewares/error.middleware';

const app: Express = express();
const ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);
app.use(errorMiddleware)

// async function initDb() {
//   if (ENV === 'development') {
//     try {
//       await sequelize.authenticate();
//       console.log('Database connection established');
//     } catch (error) {
//       console.error('Unable to connect to database:', error);
//     }
//   }
// }

// initDb()

export default app;