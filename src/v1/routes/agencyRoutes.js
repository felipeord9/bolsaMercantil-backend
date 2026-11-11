const express = require('express')
const AgencyController = require('../../controllers/agencyController')

const router = express.Router()

router
    .get('/', AgencyController.findAllAgencies)
    .get('/pos', AgencyController.findAllAgenciesPos)

module.exports = router