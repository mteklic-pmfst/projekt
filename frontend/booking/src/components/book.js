import React, {useState,useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from './loader.js';
import Error from './Error.js';

function Booking(){

const { roomid }= useParams();
  console.log(roomid)
    
    const [room,setRoom]=useState();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    const postData=async ()=>{
        setLoading(true)
        const res=await axios.post('http://localhost:3001/api/rooms/getroombyid',{roomid:roomid})
        setRoom(res.data);
        console.log(res.data)
        setLoading(false);
      }
  
      useEffect(()=>{ 
        try {
          postData();
        } catch (error) {
          setError(true)
          console.log(error)
          setLoading(false)
        }
        
      },[])

    return(
        <div className='m-5'>
             {loading?(<Loader/>):room?(
                 <div>
                     <div className='row justify-content-center mt-5 ls'>
                          <div className='col-md-5' id="1">
                                 <h1>{room.name}</h1>
                                 <img src={room.image[0]} className=''/>
                          </div>

                          <div className='col-md-5 mt-3' id="2">
                                 <div style={{textAlign:'right'}}>
                                 <i><h1>Booking Details</h1></i>
                                    <hr/>
                                 
                                    <b>
                                      <p>Name:</p>
                                      <p>From Date:</p>
                                      <p>To Date:</p>
                                      <p>Max Count:{room.count}</p>
                                    </b>
                                  </div>
                                  
                                <div style={{textAlign:'right'}}>
                                  <i><h1>Amount</h1></i>
                                  <hr/>
                                  <p>Total days:</p>
                                  <p>Rent per day:  {room.price}</p>
                                  <b>Total Amount:</b>
                                </div>

                                <div style={{float:'right'}}>
                                  <button className='btn btn-primary'>Pay Now </button>
                                </div>
                          </div>
                     </div>
                 </div>
             ):(<Error/>)}
 
             <h1>Booking zaslon</h1>
            <h1>Room id={roomid}</h1>
        </div>
)}

export default Booking