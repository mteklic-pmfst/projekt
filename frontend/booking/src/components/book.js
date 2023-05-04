import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from './loader.js';
import Error from './Error.js';
import moment from "moment";
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'

function Booking() {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  const { roomid,fromDate,toDate } = useParams();
  
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const postData = async () => {
    setLoading(true)
    const res = await axios.post('http://localhost:3001/api/rooms/getroombyid', { roomid: roomid })
    setRoom(res.data);
    setTotalamount(res.data.price*totaldays)
   
    setLoading(false);
  }

  useEffect(() => {
    try {
      postData();
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }

  }, [])

  const firstdate = moment(fromDate , 'DD-MM-YYYY')
const lastdate = moment(toDate , 'DD-MM-YYYY')

const totaldays = moment.duration(lastdate.diff(firstdate)).asDays()+1
const [totalamount,setTotalamount]=useState();


async function onToken(token){
  console.log(token)

  const bookingDetails={
    room,
    userid:JSON.parse(localStorage.getItem('currentUser')).data._id,
    fromDate,
    toDate,
    totalamount,
    totaldays,
    token
  }

 try {
  setLoading(true)
  const result= axios.post('http://localhost:3001/api/bookings/bookroom',bookingDetails)
  setLoading(false)
  Swal.fire('Congratulations','You booked room','success')
  .then(result=>{
        window.location.href='/bookings'
  })
  console.log(result)
 } catch (error) {
  setLoading(false)
  Swal.fire('UPS! :(','Something went wrong','error')
 }
}

  return (
    <div className='m-5'>
      {loading ? (<Loader />) : room ? (
        <div>
          <div className='row justify-content-center mt-5 ls'>
            <div className='col-md-5' id="1">

              <h1>{room.name}</h1>
              <img src={room.image[0]} className='' />

            </div>
            <div className='col-md-5 mt-3' id="2">
              <div style={{ textAlign: 'right' }}>
                <i><h1>Booking Details</h1></i>
                <hr />

                <b>
                  <p>Name:  {user.data.name}</p>
                  <p>From Date: {fromDate}</p>
                  <p>To Date: {toDate}</p>
                  <p>Max Count:{room.count}</p>
                </b>
              </div>

              <div style={{ textAlign: 'right' }}>
                <i><h1>Amount</h1></i>
                <hr />
                <p>Total days:  {totaldays}</p>
                <p>Rent per day:  {room.price}</p>
                <b>Total Amount: {totalamount}</b>
              </div>

              <div style={{ float: 'right' }}>
                

                <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51N3vFzBFWkHUqSlGJ0IroYTABBpaEKgwolqfc5iM7QvVRHeoQgIiXpelyWBcg8cPctQf2mtwJNBvjxr7GB0Do07Y00lSZYZIpE"
      >
        <button className='btn btn-primary' >Pay Now </button>
        </StripeCheckout>
              </div>
            </div>
          </div>

        </div>
      ) : (<Error />)}

      {/* <h1>Booking zaslon</h1>
      <h1>Room id={roomid}</h1> */}
    </div>
  )
}

export default Booking