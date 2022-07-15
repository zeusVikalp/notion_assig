const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const admin = require("./admin")
const moviedata = require("./movies")


const app = express()

app.use(cors())
app.use(bodyParser.json())


app.get("/", async (req,res) => {
    var response = await moviedata.find()
    res.send(response)
})
app.post("/login", async (req,res) => {
    var data = req.body
    var response = await admin.find({email : data.email, password : data.password})
    res.send(response)
})
app.post("/register", async (req,res) => {
    var data = req.body
    var response = await admin.insertMany([data])
    res.send(response)
})
app.post("/addmovie", async (req,res) => {
    var data = req.body
    var response = await moviedata.insertMany([data])
    res.send(response)
})
app.post("/updatemovie/:id", async (req,res) => {
    var data = req.body
    var id = req.params.id
    // console.log(data,id)
    var response = await moviedata.updateOne({_id:id}, data)
    res.send(response)
})
app.delete("/deletemovie/:id", async (req,res) => {
    var data = req.params.id
    // console.log(data)
    var response = await moviedata.deleteOne({_id:data})
    res.send(response)
})


module.exports = app;