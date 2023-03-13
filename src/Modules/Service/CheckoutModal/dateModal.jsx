import React, { useEffect, useState } from 'react' 
import { Modal, Button } from 'react-bootstrap' 
import { MDBInput } from 'mdb-react-ui-kit';

const DateModal = (props)=>{
    
    const [isShow, invokeModal] = React.useState(false); 
    const [error, setError] = useState(); 
    const initModal = () => { 
      return invokeModal(!isShow) 
    }

    const handleDate = (event)=>{
        console.log(event.target);
        const date  = document.getElementById("startTime").value;
        console.log(date);
    }
  
  return ( 

   
    <>
      <div onClick={initModal}>
        Appointment Date
      </div> 
      <Modal show={isShow} > 
        <Modal.Header closeButton onClick={initModal} className="formCol"> 
          <Modal.Title>Appointment Date</Modal.Title> 
        </Modal.Header> 
        <Modal.Body className="formCol"> 
        <div>
                <div>
                    Select Date
                </div>
                <div className="time">
                <MDBInput className="mx-auto inputColor" 
                    wrapperClass='w-100'  id='startTime' 
                    type='date'// onChange={e => setSelectedTime(new Date("1970-01-01 " + e.target.value))} 
                    responsive fluid onChange={(event)=>props.changeDate(event)}/>
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
export default DateModal;  