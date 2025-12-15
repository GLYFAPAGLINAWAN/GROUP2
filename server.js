import dotenv from "dotenv";
import supplyRoutes from "./routes/supplyRoutes.js";
import connectDB from "./config/database.js";
import express from "express";


dotenv.config();

// pag connect ha database
connectDB();

const app = express();
const PORT = process.env.PORT;

// middleware para mag parse hin JSON requests meaning pirme JSON an body han request
app.use(express.json());
app.use("/api/supplies", supplyRoutes);


app.get("/", (req, res) => {
  res.send(
    `Hello, World! Running in ${process.env.NODE_ENV || "development"} mode.`
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});