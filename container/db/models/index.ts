import sequelize from "../index.db";
import User from "./user.model";
import Transaction from "./transaction.model";
import Budget from "./budget.model";

// Set up model associations if needed (already handled inside individual model files)

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export { sequelize, User, Transaction, Budget };
