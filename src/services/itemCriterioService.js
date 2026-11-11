const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const products = models.CriterioItem.findAll({
    limit: 3000,
    include: {
      association: "item",
      as: "item",
      where: {
        tipo: [1, 3],
        indicadorVenta: 1,
        tipoInventario: {
          [Op.notIn]: [
            "IV140504  ",
            "IV143030  ",
            "IV141002  ",
            "IV143515  ",
            "IV143535  ",
            "IV145505  ",
          ],
        },
      },
      order: [["id", "ASC"]],
    },
    where: {
        plan: '002'
    }
  });

  return products;
};

module.exports = {
  find,
  //findOne
};
