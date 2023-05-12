import React, { useState, useEffect } from 'react'
import { DatePicker } from 'antd';
import moment from "moment";
import axios from "axios";
import Room from "../components/room"
import Loader from './loader';
import Error from './Error';
import "react-datepicker/dist/react-datepicker.css";
import 'antd/dist/reset.css';
const { RangePicker } = DatePicker;

function Homescreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [duplicate, setDuplicate] = useState([]);

  const getData = async () => {
    setLoading(true)
    const res = await axios.get('http://localhost:3001/api/rooms/getallrooms')
    setData(res.data);
    setDuplicate(res.data)
    console.log(res.data)
    setLoading(false);
  }

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }

  }, [])

  function filterByDate(dates) {
    setFromDate(dates[0].format('DD-MM-YYYY'))
    setToDate(dates[1].format('DD-MM-YYYY'))

    var temprooms = []
    var availability = false
    for (const room of duplicate) {
      if (room.currentbooking.length > 0) {
        for (const booking of room.currentbooking) {
          if (!moment(moment(dates[0].format('DD-MM-YYYY')).isBetween(booking.fromDate, booking.toDate))
            && !moment(moment(dates[1].format('DD-MM-YYYY')).isBetween(booking.fromDate, booking.toDate))
          ) {
            if (
              moment(dates[0]).format('DD-MM-YYYY') !== booking.fromDate &&
              moment(dates[0]).format('DD-MM-YYYY') !== booking.toDate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.fromDate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.toDate
            ) {
              availability = true
            }
          }
        }
      }

      if (availability == true || room.currentbooking.length == 0) {
        temprooms.push(room)
      }
      setData(temprooms)
    }

  }

  return (
    <div className='container'>
      <div className='display'>
        <div className='row mt-3'>
          <div className='col-md-3'>
            <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
          </div>
        </div>

        {loading ? (<Loader />)
          : data.length > 1 ? (data.map((room) => {
            return <div className='displayone'>
              <Room room={room} fromDate={fromDate} toDate={toDate} />
            </div>
          }))
            :
            (
              <Error />
            )}

      </div>
    </div>
  )
}

export default Homescreen
