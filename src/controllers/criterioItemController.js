const CriterioService = require("../services/itemCriterioService");

const findAllProducts = async (req, res, next) => {
  try {
    const data = await CriterioService.find();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllProducts,
};