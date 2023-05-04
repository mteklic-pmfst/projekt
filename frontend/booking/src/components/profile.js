import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs } from 'antd';
import Loader from './loader.js';
import Error from './Error.js';

const { TabPane } = Tabs

function Profile() {
    const user = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(() => {
        if (!user) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div className='mt-3 ml-3'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <h1>My profile</h1>

                    <hr />
                    <h1>Name: {user.data.name}</h1>
                    <h1>Email: {user.data.email}</h1>
                    <h1>isAdmin: {user.data.isAdmin ? 'Yes' : 'No'}</h1>
                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <MyBook />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Profile



export function MyBook() {

    const user = JSON.parse(localStorage.getItem('currentUser'))
    const [booking, setbooking] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchBook = async () => {
        setLoading(true)
        const rooms = await axios.post('http://localhost:3001/api/bookings/getuserbooking', { userid: user.data._id })
        console.log(rooms.data)
        setbooking(rooms.data)
        setLoading(false)
    }

    useEffect(() => {

        try {
            fetchBook()
            console.log(fetchBook())
        } catch (err) {
            console.error(err);
            setLoading(false)
            setError(true)
        }


    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    {loading && (<Loader />)}
                    {booking && (booking.map(booking=>{
                        return(
                        <div className='ls'>
                            <p><b>{booking.room}</b></p>
                            <p><b>BookingID: {booking._id}</b></p>
                            <p><b>Amount: {booking.totalamount} €</b></p>
                            <p><b>Status: {booking.status=='booked'?'CONFIRMED':'CANCELLED'} </b></p>
                                <p>
                            
                                <button style={{float:'right'}}>Cancel Booking</button>
                                </p>
                        </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}


