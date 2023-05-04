import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './room.css';
import { Link } from 'react-router-dom';

function Room({room,fromDate,toDate}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    // <div className='column'>
    //     <div className='column'>
    //       <div>
    //         <h1>{room.name}</h1>
    //         <p>Count: {room.count}</p>
    //         <button className='btn'>
    //              Details
    //         </button>
    //       </div>

    //     </div>
    //     <div className='column'>
    //         <img src={room.image[0]} className='small'/>
    //         </div>
    // </div>

<div className='row ls'>
    <div className='column'>
      <h1>{room.name}</h1>
      <p>Count: {room.count}</p>
      <div className='buttoncl'>
        
        {(fromDate&&toDate)&&(
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}> 
            <button className='btn0'>Book</button>
        </Link> 
        )}

          
        
            <button className='btnD' onClick={handleShow}>
                 Details
            </button>
        
      </div>
    </div>
    <div className='column'>
      <img src={room.image[0]} className='small'/>
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel>
            {room.image.map(url=>{
              return <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={url}
              />
            </Carousel.Item>
            })}
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
          {room.decription}
        </Modal.Footer>
      </Modal>
</div>
)}

export default Room