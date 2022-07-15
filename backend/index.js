const http = require("http")
require("./mongodb")
const app = require("./app")

http.createServer(app).listen(8001, () => {
    console.log("app is running")
})