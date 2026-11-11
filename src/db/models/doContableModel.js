const { DataTypes, Model } = require("sequelize");
const { TERCERO_TABLE } = require("./terceroModel");

const DOCTO_CONTABLE_TABLE = "t350_co_docto_contable";

const DoctoContableSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f350_rowid",
  },
  co: {
    type: DataTypes.STRING,
    field: "f350_id_co",
  },
  tipo: {
    type: DataTypes.STRING,
    field: "f350_id_tipo_docto",
  },
  consecutivo: {
    type: DataTypes.STRING,
    field: "f350_consec_docto",
  },
  fecha: {
    type: DataTypes.DATE,
    field: "f350_fecha",
  },
  totalBaseGravable: {
    type: DataTypes.STRING,
    field: "f350_total_base_gravable",
  },
  estado: {
    type: DataTypes.STRING,
    field: "f350_ind_estado",
  },
  idTercero: {
    type: DataTypes.INTEGER,
    field: "f350_rowid_tercero",
  },
};

class DoctoContable extends Model {
  static associate(models) {
    this.belongsTo(models.Tercero, {
      as: 'client',
      foreignKey: "idTercero",
      targetKey: 'id'
    });
    this.belongsTo(models.FacturaVenta, {
      as: 'factura',
      foreignKey: "id", //tabla actual
      targetKey: 'idDocto'  //tabla destino
    });
    this.hasMany(models.MovtoInvent, {
      as: 'movInvent',
      foreignKey: "idDocto", //llave de movtoInvent
      sourceKey: 'id'  //tabla actual
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTO_CONTABLE_TABLE,
      modelName: "DoctoContable",
      timestamps: false,
    };
  }
}

module.exports = {
  DoctoContable,
  DoctoContableSchema,
  DOCTO_CONTABLE_TABLE,
};