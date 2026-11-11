const { DataTypes, Model } = require("sequelize");

const MOVTO_INVENT_TABLE = "t470_cm_movto_invent";

const MovtoInventSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: "f470_rowid",
  },
  idDocto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f470_rowid_docto_fact",
  },
  bodega: {
    type: DataTypes.INTEGER,
    field: "f470_rowid_bodega",
  },
  item: {
    type: DataTypes.INTEGER,
    field: "f470_rowid_item_ext",
  },
  cantidadBase: {
    type: DataTypes.STRING,
    field: "f470_cant_base",
  },
  cant1: {
    type: DataTypes.STRING,
    field: "f470_cant_1",
  },
  cant2: {
    type: DataTypes.STRING,
    field: "f470_cant_2",
  },
  valorBruto: {
    type: DataTypes.STRING,
    field: "f470_vlr_bruto",
  },
  vlrDsctoLinea: {
    type: DataTypes.STRING,
    field: "f470_vlr_dscto_linea",
  },
  vlrDsctoGlobal: {
    type: DataTypes.STRING,
    field: "f470_vlr_dscto_global",
  },
  valorImp: {
    type: DataTypes.STRING,
    field: "f470_vlr_imp",
  },
  valorNeto: {
    type: DataTypes.STRING,
    field: "f470_vlr_neto",
  },
  fecha: {
    type: DataTypes.DATE,
    field: "f470_id_fecha",
  },
};

class MovtoInvent extends Model {
  static associate(models) {
    this.belongsTo(models.DoctoContable, {
      as: 'dctoContable',
      foreignKey: "idDocto",
      targetKey: 'id'
    });
    this.belongsTo(models.ExtensionItem, {
      as: 'extension',
      foreignKey: "item",
      targetKey: 'id'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVTO_INVENT_TABLE,
      modelName: "MovtoInvent",
      timestamps: false,
    };
  }
}

module.exports = {
  MovtoInvent,
  MovtoInventSchema,
  MOVTO_INVENT_TABLE,
};