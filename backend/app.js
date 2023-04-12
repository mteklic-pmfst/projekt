const express =require("express");
const roomsRoute = require('./routes/roomRoutes')
const app = express();
const Room=require('../models/room')

app.use('/api/rooms',roomsRoute)
app.use(express.json());

app.get("/api/rooms/getallrooms",async(req,res)=>{
    try {
        const rooms=await Room.find()
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({error})
    }

})

router.post("api/rooms/getroombyid ",async(req,res)=>{

    const roomid=req.body.roomid; 
    try {
        const room=await Room.findOne({_id:roomid})
        res.send(room)
    } catch (error) {
        return res.status(400).json({error})
    }

})

app.get('/', (req, res) =>{
    res.send('<h1>Pozdrav od Express servera</h1>')
})

module.exports = app;