const { DataTypes, Model } = require("sequelize");

const FACTURA_VENTA_TABLE = "t461_cm_docto_factura_venta";

const FacturaVentaSchema = {
  idDocto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f461_rowid_docto",
  },
  valorBruto: {
    type: DataTypes.STRING,
    field: "f461_vlr_bruto",
  },
  valorDscto: {
    type: DataTypes.STRING,
    field: "f461_vlr_dscto",
  },
  valorImp: {
    type: DataTypes.STRING,
    field: "f461_vlr_imp",
  },
  valorNeto: {
    type: DataTypes.STRING,
    field: "f461_vlr_neto",
  },
  notas: {
    type: DataTypes.STRING,
    field: "f461_notas",
  },
};

class FacturaVenta extends Model {
  static associate(models) {
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FACTURA_VENTA_TABLE,
      modelName: "FacturaVenta",
      timestamps: false,
    };
  }
}

module.exports = {
  FacturaVenta,
  FacturaVentaSchema,
  FACTURA_VENTA_TABLE,
};