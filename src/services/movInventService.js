const { Op, Sequelize } = require("sequelize");
const { models } = require("../libs/sqlServer");

const findMov = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const dateStr = `${year}-${month}-${day}`;

  const products = await models.MovtoInvent.findAll({
    where: {
      fecha: {
        [Op.between]: [
          Sequelize.literal(`'${dateStr} 00:00:00'`),
          Sequelize.literal(`'${dateStr} 23:59:59'`)
        ]
      }
    },
    include: [{
        association: "dctoContable",
        as: "dctoContable",
        include: ['client']
    },{
        association: "extension",
        as: "extension",
        include: ['item']
    }],
    order: [["id", "DESC"]],
  });

  return products;
};


// Función omoheñóiva pe texto TXT / CSV
const generateTxt = (data) => {const today = new Date();
  // 1. Encabezados del archivo
  const headers = [
    'CO',
    'Nro documento',
    'Bodega',
    'Cliente POS',
    'Razón social cliente POS',
    'Fecha',
    'Referencia',
    'Desc. item',
    'U.M. inv.',
    'Cantidad inv.',
    'Valor bruto',
    'Valor descuentos',
    'Valor subtotal',
    'Valor impuestos',
    'Valor neto'
  ].join(',');

  // 2. Mapeo de filas de datos
  const rows = data.map(item => {
    const client = item.client || {};
    const factura = item.factura || {};

    return [
      `${item.dctoContable ? item.dctoContable.co : ''}` || '',
      `${item.dctoContable ? `${item.dctoContable.tipo}-${item.dctoContable.consecutivo}`:''}` || '',
      item.bodega || '',
      `${item.dctoContable ? item.dctoContable.client.nit : ''}` || '222222222222',
      `${item.dctoContable ? item.dctoContable.client.razonSocial : ''}` || '',
      `${new Date(item.fecha).toISOString().split('T')[0]}` || '',
      `${item.extension ? item.extension.itemId : 0}` || 0,
      `${item.extension ? item.extension.item.descripcion : 0}` || 0,
      `${item.extension ?item.extension.item.um : 0}` || 0,
      item.cantidadBase || 0,
      item.valorBruto || 0,
      item.vlrDsctoGlobal || 0,
      item.valorBruto || 0,
      item.valorImp || 0,
      item.valorNeto || 0,
    ].join(',');
  });

  // 3. Unir encabezado y filas con saltos de línea
  return [headers, ...rows].join('\n');
};

module.exports = {
  findMov,
  generateTxt
};