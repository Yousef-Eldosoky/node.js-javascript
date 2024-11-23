require("dotenv").config();

function printEnv() {
    console.log(process.env);
}

setTimeout(printEnv, 5000);