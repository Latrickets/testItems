import {DataTypes} from 'sequelize';
import sequelize from './config.js';

const Item = sequelize.define(
  'Item',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);
export default Item;
