import express from 'express';
import dotenv from 'dotenv';
import supplyRoutes from './routes/supplyRoutes.js';
import connectDB from './config/database.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/supplies', supplyRoutes);

app.get('/', (req, res) => {
  res.send(`Hello! Running in ${process.env.NODE_ENV || "development"} mode.`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/supplies`);
});
