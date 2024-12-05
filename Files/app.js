const fileOperations = require("./fileOperations.js");


async function convertFileToUpperCase(filePath) {
    try {
        const data = await fileOperations.readFileAsync(filePath);
        console.log("The input file: " + data);
        message = await fileOperations.writeFileAsync("output.txt", data.toUpperCase());
        console.log(message);
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

convertFileToUpperCase("input.txt");