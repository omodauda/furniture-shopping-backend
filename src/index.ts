import dotenv from 'dotenv';
import App from './app';

import UserRoute from './routes/user.route';
import ProductRoute from './routes/product.route';
import OrderRoute from './routes/order.route';

dotenv.config();

const app = new App([
  new UserRoute(),
  new ProductRoute(),
  new OrderRoute()
]);

app.listen();