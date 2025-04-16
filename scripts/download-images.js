import fs from 'fs';
import path from 'path';
import https from 'https';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

// Lista de URLs de imágenes a descargar
const imageUrls = [
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-x10-pro-negro-1.jpg',
    filename: 'armor-x10-pro.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-x12-pro-negro-1.jpg',
    filename: 'armor-x12-pro.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-x13-negro-1.jpg',
    filename: 'armor-x13.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-22-negro-1.jpg',
    filename: 'armor-22.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/power-armor-19-negro-1.jpg',
    filename: 'power-armor-19.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-19t-negro-1.jpg',
    filename: 'armor-19t.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-24-negro-1.jpg',
    filename: 'armor-24.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-23-ultra-negro-1.jpg',
    filename: 'armor-23-ultra.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-pad-1-negro-1.jpg',
    filename: 'armor-pad-1.jpg'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/armor-pad-2-negro-1.jpg',
    filename: 'armor-pad-2.jpg'
  },
  // Iconos
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/ip68-icon.png',
    filename: 'ip68-icon.png'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/mil-std-icon.png',
    filename: 'mil-std-icon.png'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/android-icon.png',
    filename: 'android-icon.png'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/battery-icon.png',
    filename: 'battery-icon.png'
  },
  {
    url: 'https://ulefone.com.co/wp-content/uploads/2023/06/camera-icon.png',
    filename: 'camera-icon.png'
  }
];

// Obtener el directorio actual en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio donde se guardarán las imágenes
const outputDir = path.join(__dirname, '..', 'public', 'images', 'products');

// Función para descargar una imagen
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Error al descargar la imagen: ${response.statusCode}`));
        return;
      }

      const data = [];
      response.on('data', (chunk) => {
        data.push(chunk);
      });

      response.on('end', () => {
        const buffer = Buffer.concat(data);
        writeFileAsync(outputPath, buffer)
          .then(() => {
            console.log(`Imagen descargada: ${outputPath}`);
            resolve();
          })
          .catch(reject);
      });
    }).on('error', reject);
  });
}

// Función principal para descargar todas las imágenes
async function downloadAllImages() {
  try {
    // Asegurarse de que el directorio exista
    await mkdirAsync(outputDir, { recursive: true });

    // Descargar todas las imágenes
    const promises = imageUrls.map(({ url, filename }) => {
      const outputPath = path.join(outputDir, filename);
      return downloadImage(url, outputPath);
    });

    await Promise.all(promises);
    console.log('Todas las imágenes han sido descargadas correctamente.');
  } catch (error) {
    console.error('Error al descargar las imágenes:', error);
  }
}

// Ejecutar la función principal
downloadAllImages();
