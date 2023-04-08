import React, { useEffect, useState } from 'react' 
import { Modal, Button } from 'react-bootstrap' 
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'; 
import '../UserProfile.css' 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InstructorUpcomingAppointmentDetailsModal.css"
function UserUpcomingAppointmentDetailsModal(props) { 
  const [isShow, invokeModal] = React.useState(false); 
  const [error, setError] = useState(); 
  
  const initModal = () => { 
    invokeModal(!isShow) 
  } 

  // console.log(props);
 
  return ( 
    <> 
       {/* <button onClick={initModal} class="btn btn-col" type="button"> 
        <FontAwesomeIcon icon={faArrowRight} />
      </button>  */}

<FontAwesomeIcon className="iconClass" onClick={initModal}  icon={faArrowRight} />
      <Modal show={isShow}> 
        <Modal.Header closeButton onClick={initModal}> 
          <Modal.Title>Appointment Details</Modal.Title> 
        </Modal.Header> 
        <Modal.Body> 
          <form> 
            <div class="form-group"> 
               

              <table>
                <tbody className='textCol'>
                  <tr>
                    <td >Reiki Name : {props?.appointment?.reiki_id?.name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Order ID : {props?.appointment?._id}</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Instructor Name : {props?.appointment?.instructor_id?.first_name} {props?.appointment?.instructor_id?.last_name}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><div>Start Time :{props?.appointment?.time_slot?.start_time}</div> <></>
              </td>
                  </tr>
                </tbody>
               </table>
              
            </div>
          </form>     
        </Modal.Body> 
        <Modal.Footer> 
          <Button variant="danger" onClick={initModal}> 
            Close 
          </Button> 
         </Modal.Footer> 
      </Modal> 
    </> 
  ) 
} 
export default UserUpcomingAppointmentDetailsModal;