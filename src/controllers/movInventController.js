const movInventService = require("../services/movInventService");
const fs = require('fs');
const path = require('path');

const findAllMovs = async (req, res, next) => {
  try {
    const data = await movInventService.findMov();
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
    const data = await movInventService.findMov();
    const txtContent = movInventService.generateTxt(data);

    const fileName = `reporte_por_item_${new Date().toISOString().split('T')[0]}.txt`;
    
    // 1. Definir la ruta de la carpeta 'reports' y del archivo
    const reportsDir = path.join('/Ventas'); // Ajusta los '..' según dónde esté tu archivo
    const filePath = path.join(reportsDir, fileName);

    // 2. Crear la carpeta 'reports' automáticamente si no existe
    await fs.promises.mkdir(reportsDir, { recursive: true });

    // 3. Guardar el archivo en el servidor
    await fs.promises.writeFile(filePath, txtContent, 'utf-8');

    console.log(`✅ Archivo de ventas por ítem guardado correctamente: ${fileName}`);
  } catch (error) {
    console.error('❌ Error al generar el reporte por ítem:', error);
  }
}


module.exports = {
  findAllMovs,
  downloadTxtReport
};