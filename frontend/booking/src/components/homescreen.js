import React, {useState,useEffect} from 'react'
import axios from "axios";

function Homescreen() {
   
    useEffect(()=>{ 
      const getData=async ()=>{
        const data=(await axios.get('/getallrooms/')).data
        console.log(data.length)
      }
      getData()      
          
          
      
    },[])


  return (
    <div>
        <p>Homezaslon</p>
        {/* <h1>there are {data.length} rooms </h1> */}
        
    </div>
  )

  
}
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
