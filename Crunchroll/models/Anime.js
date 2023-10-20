import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Stream } from './Stream.js';

export const Anime = sequelize.define('anime', {
  id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  episodeos: {
    type: DataTypes.INTEGER(9),
    allowNull: false
  },
  datalan: {
    type: DataTypes.DATE,
    allowNull: false
  },
  temporadas: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  url_image: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  timestamps: false
});

Anime.belongsTo(Stream, {
  foreignKey: {
    name: 'stream_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Stream.hasMany(Anime, {
  foreignKey: 'stream_id'
})