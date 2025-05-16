import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index.db';
import User from './user.model';

interface BudgetAttributes {
  id: number;
  user_id: number;
  category: string;
  budget_amount: number;
  created_at: Date;
}

interface BudgetCreationAttributes extends Optional<BudgetAttributes, 'id'> {}

class Budget extends Model<BudgetAttributes, BudgetCreationAttributes> implements BudgetAttributes {
  public id!: number;
  public user_id!: number;
  public category!: string;
  public budget_amount!: number;
  public created_at!: Date;
}

Budget.init(
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
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    budget_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'budgets',
    timestamps: false, // We manually handle created_at
  }
);

// Associations
Budget.belongsTo(User, { foreignKey: 'user_id' });

export default Budget;
