const fileOperations = require("./fileOperations.js");


async function convertFileToUpperCase(filePath) {
    const data = await fileOperations.readFileAsync(filePath);
    if(data) {
        console.log("The input file: " + data);
        message = await fileOperations.writeFileAsync("output.txt", data.toUpperCase());
        console.log(message);
    } else {
        err = data;
        console.log(`${err.name}: ${err.message}`);
    }
}

convertFileToUpperCase("input.txt");