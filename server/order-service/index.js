import 'dotenv/config';
import express from 'express';
import mongoose from'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes/index.js';
import { clerkMiddleware } from '@clerk/express';

const app = express();
const PORT = 8004;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(clerkMiddleware());

app.use(routes);
app.listen(PORT, async() => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
      console.log("Error in DB connection try again.....");
    }
});