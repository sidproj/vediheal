import React, { useEffect, useState } from 'react' 
import { Modal, Button } from 'react-bootstrap' 
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'; 
import '../UserProfile.css' 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InstructorUpcomingAppointmentDetailsModal.css"
function UserUpcomingAppointmentDetailsModal() { 
  const [isShow, invokeModal] = React.useState(false); 
  const [error, setError] = useState(); 
  
  const initModal = () => { 
    invokeModal(!isShow) 
  } 
 
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
                    <td >Reiki Name : </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Order ID :</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Instructor Name :</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Order Date :</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><div>Start Time :</div> <></>
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