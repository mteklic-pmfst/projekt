// const app = require('./app')  

const PORT = 3001


const express =require("express");
const roomsRoute = require('./routes/roomRoutes')
const app = express();

const cors = require('cors')


app.use('/api/rooms',roomsRoute)

app.use(cors());
app.get('/', (req, res) =>{
    res.send('<h1>Pozdrav od Express servera</h1>')
})

app.listen(PORT, () => {
    console.log(`Posluzitelj je pokrenut na portu ${PORT}`);
   })