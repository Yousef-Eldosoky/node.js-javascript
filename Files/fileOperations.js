
const fs = require('node:fs');

exports.readFileAsync = function async (filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
      } catch (err) {
        console.error(err);
      }
};

exports.writeFileAsync = function async (filePath, content) {
    fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      console.log("file written successfully. Contet: " + content);
    }
  });
}


