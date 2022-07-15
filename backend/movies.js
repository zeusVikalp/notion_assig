const mongoose = require("mongoose")

const moviedata = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model('movie', moviedata)