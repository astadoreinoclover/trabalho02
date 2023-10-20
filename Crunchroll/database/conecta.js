import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'trabalho_02', 'root', '24122001', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});