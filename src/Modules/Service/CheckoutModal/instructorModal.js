import React, { useEffect, useState } from 'react' 
import { Modal, Button } from 'react-bootstrap' 
import { MDBInput } from 'mdb-react-ui-kit';
import Select from 'react-select';

const InstructorModal = (props)=>{
    
    const [isShow, invokeModal] = React.useState(false); 
    const [error, setError] = useState(); 
    const initModal = () => { 
      return invokeModal(!isShow) 
    }
 
  return (   
    <>
      <div onClick={initModal}>
      {
        props.instructor?props.instructor.label:"Preferred Instructor"
      }
      </div> 
      <Modal show={isShow} > 
        <Modal.Header closeButton onClick={initModal} className="formCol"> 
          <Modal.Title>Appointment Details</Modal.Title> 
        </Modal.Header> 
        <Modal.Body className="formCol"> 
        <div>
          <div>
            Preferred Instructor
          </div>
          <div className="time">
            <Select options={props.instructors} onChange={props.changeInstructor}/>
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
export default InstructorModal;  