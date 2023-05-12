const mongoose=require("mongoose")

const bookingShema=mongoose.Schema({
    room:{
        type:String,
        require:true
    },
    roomid:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
    },
    fromDate:{
        type:String,
        require:true
    },
    toDate:{
        type:String,
        require:true
    },
    totalamount:{
        type:Number,
        require:true
    },
    totaldays:{
        type:Number,
        require:true
    },
    transactionid:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
        default:'booked'
    },
},{
    timestamps:true
})

const bookingmodel=mongoose.model('bookings',bookingShema)

module.exports=bookingmodel;