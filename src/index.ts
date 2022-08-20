import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})