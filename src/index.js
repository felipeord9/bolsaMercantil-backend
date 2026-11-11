const express = require("express");
const cors = require("cors");
const routerApi = require("./v1/routes");
const { config } = require("./config/config");
const cron = require('node-cron');
const DoContableController = require('../src/controllers/doContableController')
const MovInventController = require('../src/controllers/movInventController')

const { port, host } = config;

const app = express();

// Ejecutar todos los días a las 11:30 PM
cron.schedule("30 23 * * *", async () => {
  console.log('⏰ Ejecutando creación automática archivo de ventas...');
  try {
    await DoContableController.downloadTxtReport();
    await MovInventController.downloadTxtReport();
    console.log('✨ Todos los reportes automáticos se generaron con éxito.');
  } catch (error) {
    console.error('⚠️ Error general en la ejecución del cron:', error);
  }
});

/* let corsOptions = {
  origin: 'https://pedidos.granlangostino.net:5515',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} */

app.use(express.json());
app.use(cors())
//app.use(cors(corsOptions));

routerApi(app)

app.listen(port, host, () => {
  console.log(`Server on http://${host}:${port}`);
});
