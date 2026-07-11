import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';

const dir = './src/assets/template/frame';

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

async function analyzeImage(filename) {
  const filepath = path.join(dir, filename);
  try {
    const image = await Jimp.read(filepath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    let colorCounts = {};
    
    // Sample pixels to speed up
    for (let x = 0; x < width; x += 10) {
      for (let y = 0; y < height; y += 10) {
        const hexColor = image.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hexColor);
        
        // Ignore highly transparent pixels
        if (rgba.a < 50) continue;
        
        // Ignore white and very light gray
        if (rgba.r > 240 && rgba.g > 240 && rgba.b > 240) continue;
        
        // Ignore black and very dark gray
        if (rgba.r < 30 && rgba.g < 30 && rgba.b < 30) continue;
        
        // Quantize colors by rounding to nearest 20 to group similar colors
        const r = Math.round(rgba.r / 20) * 20;
        const g = Math.round(rgba.g / 20) * 20;
        const b = Math.round(rgba.b / 20) * 20;
        
        const key = `${r},${g},${b}`;
        colorCounts[key] = (colorCounts[key] || 0) + 1;
      }
    }
    
    // Find the most common color
    let maxCount = 0;
    let dominantColor = { r: 0, g: 0, b: 0 };
    
    for (const [key, count] of Object.entries(colorCounts)) {
      if (count > maxCount) {
        maxCount = count;
        const [r, g, b] = key.split(',').map(Number);
        dominantColor = { r, g, b };
      }
    }
    
    if (maxCount === 0) {
      // Fallback
      return '#8B4513';
    }
    
    return rgbToHex(dominantColor.r, dominantColor.g, dominantColor.b);
  } catch (error) {
    console.error(`Error analyzing ${filename}:`, error.message);
    return '#8B4513'; // default fallback
  }
}

async function run() {
  console.log('Analyzing images...');
  const results = [];
  const templateNames = ['Chandan', 'Marigold', 'Sindoor', 'Mayur', 'Lotus', 'Rose', 'Jasmine', 'Tulip', 'Orchid', 'Lily', 'Daisy', 'Sunflower', 'Iris', 'Peony', 'Dahlia', 'Poppy'];
  
  for (let i = 1; i <= 16; i++) {
    const filename = `f1 (${i}).png`;
    if (fs.existsSync(path.join(dir, filename))) {
      const color = await analyzeImage(filename);
      results.push({
        id: i,
        name: templateNames[i-1] || `Template ${i}`,
        file: filename,
        color: color
      });
      console.log(`Finished ${filename}: ${color}`);
    }
  }
  
  fs.writeFileSync('./src/templates.json', JSON.stringify(results, null, 2));
  console.log('Saved to src/templates.json');
}

run();
