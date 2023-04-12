import React, {useState,useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import './book.css';

function Booking(){

const { roomid }= useParams();
  console.log(roomid)
    
    const [room,setRoom]=useState();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState();

    const postData=async ()=>{
        setLoading(true)
        const res=await axios.post('/api/rooms/getroombyid')
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
        <div>
 
             {/* {loading?(<h1>Loading...</h1>):error?(<h1>Error...</h1>):(
                 <div>
                     <div className='row'>
                          <div className='col-md-5'>
                                 <h1>{room.name}</h1>
                                 <img src={room.image[0]} className=''/>
                          </div>
                     </div>
                 </div>
             )} */}
 
             <h1>Booking zaslon</h1>
            <h1>Room id={roomid}</h1>
        </div>
       
     )
 
}

export default Booking