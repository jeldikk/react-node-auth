const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}.local`)
});
const config = require("./config");
const app = require("./app");

const PORT = config.PORT;

function runServer(){
    app.listen(PORT, () => {
        console.log("Listening server on port ", PORT)
    })
}

runServer();


