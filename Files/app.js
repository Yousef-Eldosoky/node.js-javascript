const fileOperations = require("./fileOperations.js");


console.log(fileOperations.readFileAsync("hello.txt"));

console.log(fileOperations.writeFileAsync("hello.txt", "Hello Yousef"));