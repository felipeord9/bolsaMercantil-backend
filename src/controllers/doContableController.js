const doContableService = require("../services/doContableService");
const fs = require('fs');
const path = require('path');

const findAllDocuments = async (req, res, next) => {
  try {
    const data = await doContableService.find();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

async function downloadTxtReport() {
  try {
    const data = await doContableService.find();
    const txtContent = doContableService.generateTxt(data);

    const fileName = `reporte_general_factura_${new Date().toISOString().split('T')[0]}.txt`;
    
    // 1. Definir la ruta de la carpeta y del archivo
    const reportsDir = path.join('/Ventas');
    const filePath = path.join(reportsDir, fileName);

    // 2. Crear la carpeta 'reports' si no existe (recursive: true evita errores si ya existe)
    await fs.promises.mkdir(reportsDir, { recursive: true });

    // 3. Guardar el archivo
    await fs.promises.writeFile(filePath, txtContent, 'utf-8');

    console.log(`✅ Archivo guardado correctamente: ${fileName}`);
  } catch (error) {
    console.error('❌ Error al generar el reporte automático:', error);
  }
}

const findAllMovs = async (req, res, next) => {
  try {
    const data = await doContableService.findMov();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};


module.exports = {
  findAllDocuments,
  findAllMovs,
  downloadTxtReport
};