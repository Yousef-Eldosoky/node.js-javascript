const fs = require('node:fs/promises');

async function readFileAsync(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    return err;
  }
};

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    return "file written successfully. Contet: " + content;
  } catch (err) {
    return `${err.name}: ${err.message}`;
  }
}

exports.readFileAsync = readFileAsync;
exports.writeFileAsync = writeFileAsync;

