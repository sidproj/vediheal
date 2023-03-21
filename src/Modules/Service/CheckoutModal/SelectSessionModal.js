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

const SelectSessionModal = ({isOpen, onRequestClose, sessions}) => {
  const [filteredSessions, setFilteredSessions] = useState(sessions);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Filter sessions based on selected date
    const filtered = sessions.filter(session => {
      const sessionDate = new Date(session.date);
      return sessionDate.getDate() === selectedDate.getDate()
        && sessionDate.getMonth() === selectedDate.getMonth()
        && sessionDate.getFullYear() === selectedDate.getFullYear();
    });
    setFilteredSessions(filtered);
    console.log("0",filtered);
  },[]);

  return (
    <>
    <div onClick={handleShow}>
        Select Session
      </div>
      <h2>Select a Date</h2>
      <input type="date" value={selectedDate.toISOString().substr(0,10)} onChange={(e) => setSelectedDate(new Date(e.target.value))} />
      <h2>Sessions</h2>
      {filteredSessions?.map((session, i) => (
        <div key={i}>
          <p>{session.name}</p>
          <p>{session.time}</p>
        </div>
      ))}
    </>
  );
}

export default SelectSessionModal;
