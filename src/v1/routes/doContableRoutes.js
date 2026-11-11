const express = require('express')
const doContableController = require('../../controllers/doContableController')

const router = express.Router()

router
  .get('/', doContableController.findAllDocuments)
  .get('/mov/inventario', doContableController.findAllMovs)
  .get('/download-txt', doContableController.downloadTxtReport);

module.exports = router