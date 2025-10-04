import 'dotenv/config';
import express from 'express';
import mongoose from'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { clerkMiddleware } from '@clerk/express';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();
const PORT = 8002;

// CORS configuration for production
const corsOptions = {
  origin: ['https://stockify-microservices.vercel.app', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(clerkMiddleware());

app.use(routes);
app.get('/', (req, res) => {
  res.send('Hello, Watchlist Service!');
});
app.listen(PORT, async() => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
      console.log("Error in DB connection try again.....");
    }
});