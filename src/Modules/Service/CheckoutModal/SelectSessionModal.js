import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const SelectSessionModal = (  ) => {
  
  const [timeSlots,setTimeSlots] = useState([]);

  useEffect(()=>{
    const dates = []
    for(let i=0;i<3;i++){
      dates.push(new Date());
    }

    dates[0].setHours("08");
    dates[1] = new Date("2023-03-23");
    dates[1].setHours("09");
    dates[2].setHours("10");
    mapTimes(dates);
  },[]);

  const mapTimes = (dates)=>{
    const m = {};

    dates.map(date=>{
      if ( m[date.toISOString().slice(0, 10)] == null || m[date.toISOString().slice(0, 10)] == undefined ){
        m[date.toISOString().slice(0, 10)] =[date.getHours() + " : " + date.getMinutes()];
      }
      else{
        m[date.toISOString().slice(0, 10)].push(date.getHours() + " : " + date.getMinutes());
      }
    })

    console.log(m);

  }

  return (
    <>
    <div >
        Select Session
      </div>
      <h2>Select a Date</h2>
      <h2>Sessions</h2>
    </>
  );
}

export default SelectSessionModal;
