const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/project', () => {
    console.log("mongodb is working")
})

module.exports = mongoose