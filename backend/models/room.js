const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    count: {
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:[],
    currentbooking:[],
    decription:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const roomModel = mongoose.model('rooms', roomSchema)

module.exports = roomModel