const { DataTypes, Model } = require("sequelize");

const CRITERIO_ITEM_TABLE = "t125_mc_items_criterios";

const CriterioItemSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f125_id_cia",
  },
  plan: {
    type: DataTypes.STRING,
    field: "f125_id_plan",
  },
  criterio: {
    type: DataTypes.STRING,
    field: "f125_id_criterio_mayor",
  },
  itemId: {
    type: DataTypes.INTEGER,
    field: "f125_rowid_item",
  },
};

class CriterioItem extends Model {
  static associate(models) {
    this.belongsTo(models.Item, {
      foreignKey: "itemId",
      as: "item",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CRITERIO_ITEM_TABLE,
      modelName: "CriterioItem",
      timestamps: false,
    };
  }
}

module.exports = {
  CriterioItem,
  CriterioItemSchema,
  CRITERIO_ITEM_TABLE,
};
