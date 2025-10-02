import 'dotenv/config';
import express from 'express';
import mongoose from'mongoose';
import routes from "./routes/index.js";
import cors from 'cors';
// import cors from 'cors';

const app = express();
const PORT = 8001;

app.use(cors());
app.use(routes);
app.get('/', (req, res) => {
        res.send('Hello, Stock Service!');
});
// Connect to MongoDB
app.listen(PORT, async() => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
      console.log("Error in DB connection try again.....");
    }
});