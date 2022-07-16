const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017', () => {
    console.log("mongodb is working")
})

module.exports = mongoose