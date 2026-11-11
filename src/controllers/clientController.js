const ClientService = require("../services/clientService");

const findAllClients = async (req, res, next) => {
  try {
    const data = await ClientService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneClientByNit = async (req, res, next) => {
  try {
    const { params : { nit } } = req
    console.log(nit)
    const data = await ClientService.findByNit(nit)

    res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const findOneClient = async (req, res, next) => {
  try {
    const { params:{id}} = req
    const data = await ClientService.findOne(id)

    res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

const createClient = async (req, res, next) => {
  try {
    const {body} = req
    const data = await ClientService.create(body)

    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllClients,
  findOneClient,
  findOneClientByNit,
  createClient
}