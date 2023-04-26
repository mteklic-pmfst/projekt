import React, {useState,useEffect} from 'react'
import axios from "axios";
import Room from "../components/room"
import './homescreen.css';
import Loader from './loader';
import Error from './Error';

function Homescreen() {
  const [poruka, postaviPoruku] = useState("Nema podataka");

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState();
  const [error,setError]=useState();
  
  const getData=async ()=>{
      setLoading(true)
      const res=await axios.get('http://localhost:3001/api/rooms/getallrooms')
      // const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data);
      console.log(res.data)
      setLoading(false);
    }
    
    useEffect(()=>{ 
        try {
            getData();
          } catch (error) {
              setError(true)
              console.log(error)
              setLoading(false)
            }
          
          },[])
          
          // const klikMisa = () => {
          //   axios
          //   .get("api/rooms/getallrooms")
          //   //.then(res => console.log(res))
          //   .then((res) => {
          //     console.log(res.data);
          //     postaviPoruku(res.data.body);
          //   })
          //   .catch((err) => postaviPoruku("Došlo je do pogreške"));
          // }

          // useEffect( () =>{
          //   console.log("Effect hook");
          //   axios.get('https://jsonplaceholder.typicode.com/posts/2')
          //   .then( response =>{
          //   console.log("Promise fullfiled");
          //   postaviPoruku(response.data.body)
          //   })
          //   }, [])
           
  return (

    // <>
    //   {/* <div>{poruka}</div> */}
    //   {/* <button onClick={klikMisa}>Pošalji</button> */}
    // </>
 //<div className='contain'>
    //    <div className='row justify-content-center mt-5'>
    //        {/* <p>Homezaslon</p>
    //      <h1>there are {data.length} rooms </h1>  */}

    //     {loading ?(<h1>Loading..</h1>)
    //     :error ?(<h1>Error</h1>)
    //     :(data.map((room)=>{
    //       return <div className='col-md-9'>
    //         <Room room={room}/>
    //       </div>
    //     })
    //     )}
        
    //    </div>
    // </div>

    <div className='container'>
       <div className='display'>
           {/* <p>Homezaslon</p>
         <h1>there are {data.length} rooms </h1>  */}

        {loading ?(<Loader/>)
        :data.length>1 ?(data.map((room)=>{
          return <div className='displayone'>
            <Room room={room}/>
          </div>
        }))
        :(
        <Error/>)}
        
       </div>
    </div>
   )}
  

 

// import React, { useState, useEffect } from "react";

// import axios from "axios";

// function Homescreen () {
//  const [poruka, postaviPoruku] = useState("Nema podataka");
//  const [idPoruke, postaviId] = useState(1);

//  useEffect(() => {
//   console.log("Effect hook");
//   postaviPoruku("Poruka se učitava ...")
//   axios
//   .get("https://jsonplaceholder.typicode.com/posts/" + idPoruke)
//   .then((response) => {
//   console.log("Promise fullfiled");
//   postaviPoruku(response.data.body);
//   });
//  }, [idPoruke]);
//  return (
//   <>
//       <div>ID poruke {idPoruke} </div>
//       <div>
//         <button onClick={() => postaviId((idPoruke) => idPoruke + 1)}>+</button>
//         <button onClick={() => postaviId((idPoruke) => idPoruke - 1)}>-</button>
//       </div>
//       <div>{poruka}</div>
//     </>
//  );
// };




export default Homescreen
