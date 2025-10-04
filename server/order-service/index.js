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
app.get('/', (req, res) => { 
  res.send('Hello, Order Service!');  // Replace with your own message.  // You can add other routes here.  // For example, app.post('/order', orderController.createOrder);  // This will create a new order.  // Make sure to replace orderController with your own controller.  // Also, make sure to import your orderController and define it in your routes file.  // You can also use app.get('/orders', orderController.getOrders);  // This will get all orders.  // Replace orderController with your own controller.  // Make sure to import your orderController and define it in your routes file.  // For example, app.get('/order/:id', orderController.getOrderById);  // This will get a specific order by id.  // Replace orderController with your own controller.  // Make sure to import your orderController and define it in your routes file.  // For example, app
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