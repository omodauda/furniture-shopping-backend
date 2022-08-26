import dotenv from 'dotenv';
import App from './app';

import UserRoute from './routes/user.route';

dotenv.config();

const app = new App([new UserRoute()]);

app.listen();