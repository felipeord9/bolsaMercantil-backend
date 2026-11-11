const { models } = require("../libs/sqlServer");

const find = () => {
  const agencies = models.Agencia.findAll({
    limit: 100,
    attributes: ['id', 'descripcion'],
    include: ['contacto'],
    where: {id: [
      '001', 
      '004',
      '003', 
      '005', 
      '007', 
      '008', 
      '010', 
      '011',
      '012',
      '013',
      '014',
      '015',
      '016',
      '017',
      '023',
      '025',
      '026',
      '027',
      '030',
      '031',
      '034',
      '038',
      '037',
      '039',
    ]}
  });
  return agencies;
};

const findPos = () => {
  const agencies = models.Agencia.findAll({
    limit: 100,
    attributes: ['id', 'descripcion'],
    include: ['contacto'],
    where: {id: [
      '004',
      '005', 
      '007',
      '008', 
      '010',
      '011',
      '012',
      '013',
      '014',
      '015',
      '016',
      '017',
      '023',
      '027',
      '030',
      '031',
      '034',
      '037',
      '038',
      '039',
    ]}
  });
  return agencies;
};

module.exports = {
  find,
  findPos
};