import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';

export const Stream = sequelize.define('stream', {
  id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
}, {
  timestamps: false
});