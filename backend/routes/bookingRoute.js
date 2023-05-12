const express = require("express")
const router = express.Router();
const Booking = require("../models/booking")
const Room = require("../models/room")
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51N3vFzBFWkHUqSlGcPeH1lv1BhiW5EvWAC3sQkLYFGMc2XdYv1m4plDzKU426T4X8gV7UcyNXT7qH1ITccchCeil00o3BTiKh6')

router.post('/bookroom', async (req, res) => {
    const {
        room,
        userid,
        fromDate,
        toDate,
        totalamount,
        totaldays,
        token
    } = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        })
        const payment = await stripe.charges.create({

            amount: totalamount * 100,
            customer: customer.id,
            currency: 'eur',
            receipt_email: token.email
        },
            {
                idempotencyKey: uuidv4()
            }
        )

        if (payment) {
            try {
                const newbooking = new Booking({
                    room: room.name,
                    roomid: room._id,
                    userid,
                    fromDate,
                    toDate,
                    totalamount,
                    totaldays,
                    transactionid: '1234'

                })

                const booking = await newbooking.save()
                const temp = await Room.findOne({ _id: room._id })

                temp.currentbooking.push({
                    bookingid: booking._id,
                    fromDate: fromDate,
                    toDate: toDate,
                    userid: userid,
                    status: booking.status
                });

                await temp.save()

            }
            catch (err) {
                console.error(err);
                return res.status(400).json({ message: "Error: " + err.message })
            }
        }
        res.send('Payment Succesful,You booked room')

    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error: " + err.message })
    }

})

router.post("/getuserbooking", async (req, res) => {
    const userid = req.body.userid

    try {
        const bookings = await Booking.find({ userid: userid })
        res.send(bookings)
    } catch (err) {
        console.error(err);
        return res.status(404).json({ message: "Error: " + err.message })
    }
})

router.post("/cancelbooking", async (req, res) => {
    const { bookingid, roomid } = req.body

    try {
        const bookingitem = await Booking.findOne({ _id: bookingid })

        bookingitem.status = 'cancelled'

        await bookingitem.save()
        const room = await Room.findOne({ _id: roomid })

        const bookings = room.currentbooking

        const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid)

        room.currentbooking = temp

        res.send('Your booking cancelled successful!')

        await room.save()
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error: " + err.message })
    }
})

router.get("/getallbookings", async (req, res) => {
    try {
        const booking = await Booking.find()
        res.send(booking)
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error: " + err.message })
    }

})

module.exports = router;