import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../index.db";
import User from "./user.model";

interface TransactionAttributes {
  id: number;
  user_id: number;
  description: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  transaction_date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TransactionCreationAttributes
  extends Optional<TransactionAttributes, "id"> {}

class Transaction
  extends Model<TransactionAttributes, TransactionCreationAttributes>
  implements TransactionAttributes
{
  public id!: number;
  public user_id!: number;
  public description!: string;
  public amount!: number;
  public category!: string;
  public type!: "income" | "expense";
  public transaction_date!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "transactions",
  }
);

// Associations
Transaction.belongsTo(User, { foreignKey: "user_id" });

export default Transaction;
