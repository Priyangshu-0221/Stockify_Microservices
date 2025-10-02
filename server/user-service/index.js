import 'dotenv/config';
import express from 'express';
import { clerkMiddleware } from '@clerk/express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from "./routes/index.js";
import morgan from 'morgan';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(clerkMiddleware());
app.use(morgan('dev'));
// Start the server and listen on the specified port
app.use(routes);
app.get('/', (req, res) => {
  res.send('Hello, User Service!');
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