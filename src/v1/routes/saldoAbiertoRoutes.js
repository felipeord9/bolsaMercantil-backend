const express = require('express')
const { models } = require("../../libs/sqlServer");

const router = express.Router()

router
  .get('/', async (req, res, next) => {
    try {
      const data = await models.SaldoAbierto.findAll({
          limit: 10,
          order: [["id", "DESC"]],
        });
      
      res.status(200).json({
        status: "OK",
        data,
      });
    } catch (error) {
      next(error);
    }
  })

module.exports = router