const express = require('express')
const { models } = require("../../libs/sqlServer");
const MovInventController = require('../../controllers/movInventController')

const router = express.Router()

router
  .get('/', async (req, res, next) => {
    try {
      const data = await models.MovtoInvent.findAll({
          limit: 10,
          /* order: [["id", "DESC"]], */
        });
      
      res.status(200).json({
        status: "OK",
        data,
      });
    } catch (error) {
        console.log(error)
      next(error);
    }
  })
  .get('/inventario', MovInventController.findAllMovs)
  .get('/download-txt', MovInventController.downloadTxtReport);

module.exports = router