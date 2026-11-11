const { DataTypes, Model } = require("sequelize");

const SALDO_ABIERTO_TABLE = "t353_co_saldo_abierto";

const SaldoAbiertoSchema = {
  idDoc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f353_rowid_docto",
  },
  id: {
    type: DataTypes.INTEGER,
    field: "f353_rowid",
  },
  valorImpuesto: {
    type: DataTypes.STRING,
    field: "f353_valor_impuesto",
  },
  impuestoNc: {
    type: DataTypes.STRING,
    field: "f353_valor_impuesto_nc",
  },
  movDoct: {
    type: DataTypes.STRING,
    field: "f353_rowid_mov_docto",
  },
  fecha: {
    type: DataTypes.DATE,
    field: "f353_fecha",
  },
};

class SaldoAbierto extends Model {
  static associate(models) {
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SALDO_ABIERTO_TABLE,
      modelName: "SaldoAbierto",
      timestamps: false,
    };
  }
}

module.exports = {
  SaldoAbierto,
  SaldoAbiertoSchema,
  SALDO_ABIERTO_TABLE,
};