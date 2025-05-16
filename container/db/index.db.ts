// app/db/index.db.ts
import { Sequelize } from "sequelize";
import pg from "@/node_modules/@types/pg";

// Create a new Sequelize instance with your database config
const sequelize = new Sequelize("prefin", "postgres", "postgres", {
  host: "db",
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
});

export default sequelize;
