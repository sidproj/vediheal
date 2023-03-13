import React, {useState } from 'react' 
import { Modal, Button } from 'react-bootstrap' 
import { MDBInput } from 'mdb-react-ui-kit';

const TimeModal = (props)=>{
    
    const [isShow, invokeModal] = React.useState(false);
     const [selectedTime, setSelectedTime] = useState(new Date()); 
    const [error, setError] = useState(); 
    const initModal = () => { 
      return invokeModal(!isShow) 
    }

     const handleTime = (event) => {
    const date  = document.getElementById("sTime").value;
    
  };


  return ( 

   
    <>
      <div onClick={initModal}>Appointment Time</div> 
      <Modal show={isShow} > 
        <Modal.Header closeButton onClick={initModal} className="formCol"> 
          <Modal.Title>Appointment Time</Modal.Title> 
        </Modal.Header> 
        <Modal.Body className="formCol"> 
        <div>
                <div>Select Time</div>
                <div className="time">
                <MDBInput className="mx-auto inputColor" 
                    wrapperClass='w-100'  id='sTime' 
                    type='time'// onChange={e => setSelectedTime(new Date("1970-01-01 " + e.target.value))} 
                    responsive fluid onChange={(event)=>props.changeTime(event)}/>
                </div>
        </div>        
        </Modal.Body>  
        <Modal.Footer className="formCol"> 
          <Button variant="danger" onClick={initModal}> 
            Close 
          </Button> 
         </Modal.Footer> 
      </Modal> 
    </> 
  ) 
} 
export default TimeModal;  