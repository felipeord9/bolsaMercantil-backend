const express = require('express')
const CriterioController = require('../../controllers/criterioItemController')

const router = express.Router()

router
  .get('/', CriterioController.findAllProducts)

module.exports = router