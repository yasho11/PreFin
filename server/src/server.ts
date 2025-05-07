import express, { Request, Response } from "express";
import { sequelize } from "./config/database";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());


// Test DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error: any) => {
    console.error("Database connection error: ", error);
  });


//Sync models
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error: any) => {
    console.error("Error synchronizing database: ", error);
  });

//Routes
app.use("api/auth", authRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
