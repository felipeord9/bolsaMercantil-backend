const express = require('express')
const ClientController = require('../../controllers/clientController')

const router = express.Router()

router
  .get('/', ClientController.findAllClients)
  .get('/:id', ClientController.findOneClient)
  .get('/nit/:nit', ClientController.findOneClientByNit)
  .post('/', ClientController.createClient)

module.exports = router