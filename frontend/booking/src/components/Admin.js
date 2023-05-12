import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs } from 'antd';
import Loader from './loader.js';
import Error from './Error.js';
import Swal from 'sweetalert2'

const { TabPane } = Tabs
function Admin() {

    useEffect(() => {
        if (!(JSON.parse(localStorage.getItem('currentUser')).data.isAdmin)) {
            window.location.href = '/home'
        }

    }, [])
    return (
        <div className='mt-3 ms-3 me-3 ls'>
            <h1 style={{ fontSize: '30px' }}>Admin Panel</h1>

            <Tabs defaultActiveKey="1">
                <TabPane tab="Bookings" key="1">
                    <Bookings />
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <Rooms />
                </TabPane>
                <TabPane tab="Add Rooms" key="3">
                    <AddRoom />
                </TabPane>
                <TabPane tab="Users" key="4">
                    <Users />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Admin


//Booking List Components

export function Bookings() {

    const [booking, setbooking] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    
    const fetchBook = async () => {
        const data = await axios.get('http://localhost:3001/api/bookings/getallbookings')
        console.log(data)
        setbooking(data.data)
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
        <div className='row'>
            <div className='col-md-10'>
                <h1>Booking</h1>
                {loading && (<Loader />)}
                <table className='table table-bordered table-info'>
                    <thead className='ls'>
                        <tr>
                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {booking.length && (booking.map(booking => {
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td>{booking.roomid}</td>
                                <td>{booking.fromDate}</td>
                                <td>{booking.toDate}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

//Room List Components

export function Rooms() {

    const [rooms, setrooms] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchRoom = async () => {
        const rooms = await axios.get('http://localhost:3001/api/rooms/getallrooms')
        console.log(rooms)
        setrooms(rooms.data)
        setLoading(false)
    }
    useEffect(() => {
        try {
            fetchRoom()
        } catch (err) {
            console.error(err);
            setLoading(false)
            setError(true)
        }
    }, [])


    return (
        <div className='row'>
            <div className='col-md-10'>
                <h1>Rooms</h1>
                {loading && (<Loader />)}

                <table className='table table-bordered table-info'>
                    <thead className='ls'>
                        <tr>
                            <th>Room ID</th>
                            <th>Name</th>
                            <th>Rent per day</th>
                            <th>MaxCount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr>
                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.price}</td>
                                <td>{room.count}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
//Users List Components

export function Users() {
    const [user, setuser] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const fetchBook = async () => {
        const user = await axios.get('http://localhost:3001/api/users/getallusers')
        console.log(user)
        setuser(user.data)
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
        <div className='row'>
            <div className='col-md-10'>
                <h1>Users</h1>
                <table className='table table-bordered table-info'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th> Name</th>
                            <th> Email</th>
                            <th> isAdmin</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user && (user.map(users => {
                            return <tr>
                                <td>{users._id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.isAdmin ? 'Yes' : 'No'}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

//Add Room Component

export function AddRoom() {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [count,setCount]=useState('')
    const [decription,setDecription]=useState('')
    const [url1,setUrl1]=useState('')
    const [url2,setUrl2]=useState('')
    const [url3,setUrl3]=useState('')

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    async function addRoom(){
        const newroom={
            name,
            price,
            count,
            decription,
            image:[url1,url2,url3]
        }

        try {
            const result=await axios.post('http://localhost:3001/api/rooms/addroom',newroom)
            Swal.fire('Congratulations', 'Your new room added! :)', 'success')
            .then(result => {
                window.location.href = '/home'
              })
            console.log(result)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
            Swal.fire('UPS! :(', 'Something went wrong', 'error')
        }
        
    }



    return (
        <div className='row'>
           
            <div className='col-md-5 me-3 ms-3'>
                <input type='text' className='form-control' placeholder='name'
                value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input type='text' className='form-control' placeholder='rentperday'
                value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                <input type='text' className='form-control' placeholder='maxcount'
                value={count} onChange={(e)=>setCount(e.target.value)}></input>
                <input type='text' className='form-control' placeholder='description'
                value={decription} onChange={(e)=>setDecription(e.target.value)}></input>


            </div>

            <div className='col-md-5 ms-4'>

                <input type='text' className='form-control' placeholder='url 1'
                value={url1} onChange={(e)=>setUrl1(e.target.value)}></input>
                <input type='text' className='form-control' placeholder='url 2'
                value={url2} onChange={(e)=>setUrl2(e.target.value)}></input>
                <input type='text' className='form-control' placeholder='url 3'
                value={url3} onChange={(e)=>setUrl3(e.target.value)}></input>

                <div className='text-right'>
                    <button className='btn btn-primary mt-2 ' style={{float:'right'}} onClick={addRoom}>Add Room</button>
                </div>

            </div>

        </div>
    )
}
