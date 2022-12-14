const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
    },
    traveller_amount: {
      type: DataTypes.DECIMAL,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Traveller',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Location',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trips;
