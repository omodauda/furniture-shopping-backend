import dotenv from 'dotenv';
import App from './app';

import UserRoute from './routes/user.route';
import ProductRoute from './routes/product.route';

dotenv.config();

const app = new App([new UserRoute(), new ProductRoute()]);

app.listen();