const mongoose = require('mongoose')
require('dotenv').config()

const roomSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    count: {
        type:Number,
        required:true
    },
    breakfast:{
        type:Boolean,
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


const password = process.env.ATLAS_PASS
console.log(password);
const dbname = 'project-hotel'
const url = `mongodb+srv://matea:${password}@cluster0.bjqtaik.mongodb.net/${dbname}?
retryWrites=true&w=majority`

console.log("Spajamo se na bazu")
mongoose.connect(url)
 .then(result => {
 console.log("Spojeni smo na bazu");
 })
 .catch(error => {
 console.log("Greška pri spajanju", error.message);
})


module.exports = roomModel