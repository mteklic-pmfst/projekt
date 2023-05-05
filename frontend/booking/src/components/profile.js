import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs } from 'antd';
import Loader from './loader.js';
import Error from './Error.js';
import Swal from 'sweetalert2'
import { Divider, Space, Tag } from 'antd';


const { TabPane } = Tabs

function Profile() {
    const user = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(() => {
        if (!user) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div className='mt-3 ml-3' >
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <div className='ls'>

                        <h1>My profile</h1>

                        <hr />
                        <h1><b>Name:</b> {user.data.name}</h1>
                        <h1><b>Email:</b> {user.data.email}</h1>
                        <h1><b>isAdmin:</b>{user.data.isAdmin ? 'Yes' : 'No'}</h1>
                    </div>

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
        console.log(rooms)
        setbooking(rooms.data)
        setLoading(false)
    }

    async function cancelBook(bookingid, roomid) {
        try {
            setLoading(true)
            const result = await axios.post('http://localhost:3001/api/bookings/cancelbooking', { bookingid, roomid })
            console.log(result)
            setLoading(false)
            Swal.fire('Congratulations', 'You cancel room', 'success')
                .then(result => {
                    window.location.reload()
                })
        } catch (err) {
            setLoading(false)
            console.error(err);
            Swal.fire('UPS! :(', 'Something went wrong', 'error')

        }

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
                    {booking && (booking.map(booking => {
                        return (
                            <div className='ls'>
                                <p><b>{booking.room}</b></p>
                                <p><b>BookingID: {booking._id}</b></p>
                                <p><b>Checkin: {booking.fromDate} </b></p>
                                <p><b>Checkout: {booking.toDate} </b></p>
                                <p><b>Amount: {booking.totalamount} €</b></p>
                                <p><b>Status: </b>{""} 
                                {booking.status=='cancelled'?(<Tag color="red">CANCELLED</Tag>):(<Tag color="green">CONFIRMED</Tag>)}
                                </p>
                                {booking.status !== 'cancelled' && (
                                    <p>
                                        <button style={{ float: 'right' }} onClick={() => { cancelBook(booking._id, booking.roomid) }}>Cancel Booking</button>
                                    </p>
                                )}
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}


