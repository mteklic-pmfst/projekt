import React, { useContext, useState } from 'react'
import './middle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { Link } from 'react-router-dom';

function Mid() {
    const [openDate, setOpen] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    const [openO, setO] = useState(false);
    const [option, setOpt] = useState({
        odrasli: 1,
        djeca: 0
    })

    const handleOpt = (name, oper) => {
        setOpt(prev => {
            return {
                ...prev,
                [name]: oper === "i" ? option[name] + 1 : option[name] - 1
            }
        })
    }


    function search() {
        window.location.href = '/home'
    }

    return (
        <div className='search'>
            {/* <div className='ItemS'>
                <input type="text"
                    placeholder='Koji hotel želiš posjetiti?'
                    className='InputSearch' />
                <FontAwesomeIcon icon={faBed} />
            </div> */}

            {/* <div className='ItemS'>
                <span onClick={() => setOpen(!openDate)} className='TextPrijava'>{`${format(date[0].startDate, "dd/MM/yyyy")} do ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                
                <FontAwesomeIcon icon={faCalendarDays} />
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="datum"
                />}
            </div> */}

            {/* <div className='ItemS'> */}
                {/* <span onClick={() => setO(!openO)} className='TextPrijava'>{`${option.odrasli} odrasli - ${option.djeca} djeca`}</span>
                <FontAwesomeIcon icon={faPerson} />
                {openO && <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>Odrasli</span>
                        <div className='opcijebrojac'>
                            <button
                                disabled={option.odrasli <= 1}
                                className='brojac'
                                onClick={() => handleOpt("odrasli", "d")}> -
                            </button>
                            <span className='counterNumber'>{option.odrasli}</span>
                            <button className='brojac' onClick={() => handleOpt("odrasli", "i")}> + </button>
                        </div>
                    </div>

                    <div className='optionItem'>
                        <span className='optionText'>Djeca </span>
                        <div className='opcijebrojac'>
                            <button
                                disabled={option.djeca <= 0}
                                className='brojac' onClick={() => handleOpt("djeca", "d")}> - </button>
                            <span className='counterNumber'>{option.djeca}</span>
                            <button className='brojac' onClick={() => handleOpt("djeca", "i")}> + </button>
                        </div>
                    </div>
                </div>}


            </div> */}
            <div className='ItemS'>
                <button className='btn1' onClick={search}>Pretraži</button>
            </div>
        </div>
    )
    


}



export default Mid