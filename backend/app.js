const express =require("express");
const roomsRoute = require('./routes/roomRoutes')
const app = express();
const Room=require('../models/room')

app.use('/api/rooms',roomsRoute)

app.get("/api/rooms/getallrooms",async(req,res)=>{
    try {
        const rooms=await Room.find()
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({error})
    }

})

app.get('/', (req, res) =>{
    res.send('<h1>Pozdrav od Express servera</h1>')
})

module.exports = app;