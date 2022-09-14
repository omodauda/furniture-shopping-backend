import dotenv from 'dotenv';
import App from './app';

import UserRoute from './routes/user.route';
import ProductRoute from './routes/product.route';
import OrderRoute from './routes/order.route';
import CartRoute from './routes/cart.route';
import HealthRoute from './routes/health.route';

dotenv.config();

const app = new App([
  new HealthRoute(),
  new UserRoute(),
  new ProductRoute(),
  new OrderRoute(),
  new CartRoute()
]);

app.listen();