import fs from 'fs';
import path from 'path';

const dir = './src/assets/logos';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

// Map of filenames to their unicode symbol or SVG paths
const logos = {
  'ganesha1.svg': 'ॐ',
  'om1.svg': 'ॐ',
  'swastika1.svg': '卐',
  'khanda1.svg': '☬',
  'cross1.svg': '✝',
  'allah1.svg': 'ﷲ',
  'chakra1.svg': '☸',
};

// Generates an elegant circled logo
const createSVG = (char, color) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="50" cy="50" r="40" fill="none" stroke="${color}" stroke-width="1.5"/>
  <text x="50%" y="52%" font-size="45" fill="${color}" font-family="Arial, sans-serif" text-anchor="middle" alignment-baseline="middle">${char}</text>
</svg>
`;

Object.entries(logos).forEach(([filename, char]) => {
  // Use a deep rich color that fits all templates well, e.g., maroon #9c152a or dark gold #b8860b
  // Since we use CSS filter later or just a static color, let's use a nice dark maroon.
  fs.writeFileSync(path.join(dir, filename), createSVG(char, '#b71c1c'));
});
console.log('Successfully generated beautifully styled SVG logos!');
