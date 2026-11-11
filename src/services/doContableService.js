const { Op, Sequelize } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const dateStr = `${year}-${month}-${day}`;

  const products = await models.DoctoContable.findAll({
    where: {
      tipo: {
        [Op.in]: ['FE1', 'FE2', 'FE3', 'FE4']
      },
      fecha: {
        [Op.between]: [
          Sequelize.literal(`'${dateStr} 00:00:00'`),
          Sequelize.literal(`'${dateStr} 23:59:59'`)
        ]
      }
    },
    include: ['client', 'factura'],
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
    'Factura base devolución',
    'Fact./Nota',
    'Factura electrónica',
    'Cliente POS',
    'Razón social cliente POS',
    'Fecha',
    'Valor gravado',
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
      item.co || '',
      `${item.tipo}-${item.consecutivo}` || '',
      item.devolucion || '',
      `${item.tipo}-${item.consecutivo}` || '',
      `${item.estado === 1 ? 'Confirmados' : ''}` || '',
      item.client.nit || '222222222222',
      item.client.razonSocial || '',
      `${new Date(item.fecha).toISOString().split('T')[0]}` || '',
      item.totalBaseGravable || 0,
      item.factura.valorBruto || 0,
      item.factura.valorDscto || 0,
      item.factura.valorBruto || 0,
      item.factura.valorImp || 0,
      item.factura.valorNeto || 0,
    ].join(',');
  });

  // 3. Unir encabezado y filas con saltos de línea
  return [headers, ...rows].join('\n');
};

const findMov = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const dateStr = `${year}-${month}-${day}`;

  const products = await models.DoctoContable.findAll({
    where: {
      tipo: {
        [Op.in]: ['FE1', 'FE2', 'FE3', 'FE4']
      },
      fecha: {
        [Op.between]: [
          Sequelize.literal(`'${dateStr} 00:00:00'`),
          Sequelize.literal(`'${dateStr} 23:59:59'`)
        ]
      }
    },
    include: ['client', 'movInvent'],
    order: [["id", "DESC"]],
  });

  return products;
};

module.exports = {
  find,
  findMov,
  generateTxt
};