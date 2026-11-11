const { Cliente, ClienteSchema } = require("./clienteModel");
const { Tercero, TerceroSchema } = require("./terceroModel");
const { Item, ItemSchema } = require("./itemModel");
const { ExtensionItem, ExtensionItemSchema } = require("./extensionItemModel");
const { Vendedor, VendedorSchema } = require("./vendedorModel");
const { Contacto, ContactoSchema } = require("./contactoModel");
const { Agencia, AgenciaSchema } = require("./agenciaModel");
const { BodegaItem, BodegaItemSchema } = require("./bodegaModel");
const { Instalacion, InstalacionSchema } = require("./instalacionModel");
const { CriterioItem, CriterioItemSchema } = require("./criterioItemModel");
const { DoctoContable, DoctoContableSchema } = require("./doContableModel");
const { FacturaVenta, FacturaVentaSchema } = require("./facVentaModel");
const { SaldoAbierto, SaldoAbiertoSchema } = require("./saldoAbiertoModel");
const { MovtoInvent, MovtoInventSchema } = require("./movInventModel");

function setupModels(sequelize) {
  Contacto.init(ContactoSchema, Contacto.config(sequelize));
  Agencia.init(AgenciaSchema, Agencia.config(sequelize))
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Tercero.init(TerceroSchema, Tercero.config(sequelize));
  Item.init(ItemSchema, Item.config(sequelize));
  ExtensionItem.init(ExtensionItemSchema, ExtensionItem.config(sequelize));
  Vendedor.init(VendedorSchema, Vendedor.config(sequelize));
  BodegaItem.init(BodegaItemSchema, BodegaItem.config(sequelize));
  Instalacion.init(InstalacionSchema, Instalacion.config(sequelize));
  CriterioItem.init(CriterioItemSchema, CriterioItem.config(sequelize));
  DoctoContable.init(DoctoContableSchema, DoctoContable.config(sequelize));
  FacturaVenta.init(FacturaVentaSchema, FacturaVenta.config(sequelize));
  SaldoAbierto.init(SaldoAbiertoSchema, SaldoAbierto.config(sequelize));
  MovtoInvent.init(MovtoInventSchema, MovtoInvent.config(sequelize));

  Contacto.associate(sequelize.models);
  Agencia.associate(sequelize.models)
  Tercero.associate(sequelize.models);
  Cliente.associate(sequelize.models);
  ExtensionItem.associate(sequelize.models);
  Item.associate(sequelize.models);
  Vendedor.associate(sequelize.models);
  BodegaItem.associate(sequelize.models);
  Instalacion.associate(sequelize.models);
  CriterioItem.associate(sequelize.models);
  DoctoContable.associate(sequelize.models);
  FacturaVenta.associate(sequelize.models);
  SaldoAbierto.associate(sequelize.models);
  MovtoInvent.associate(sequelize.models);

}

module.exports = setupModels;
