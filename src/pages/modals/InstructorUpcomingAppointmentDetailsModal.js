import React, { useEffect, useState } from 'react' 
import { Modal, Button } from 'react-bootstrap' 
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InstructorUpcomingAppointmentDetailsModal.css"
import UpdateMeetingLinkModal from "./UpdateMeetingLinkModal"
function InstructorUpcomingAppointmentDetailsModal(props) { 

  const data = props.data;

  const [isShow, invokeModal] = React.useState(false); 
  const [error, setError] = useState(); 
  const initModal = () => { 
    return invokeModal(!isShow) 
  } 
 
//   const handelChangePassword = async()=>{ 
//     const data = { 
       
//       "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzU1ZGZkZDJkN2RkYTk1NTlkNDIyMiIsImlhdCI6MTY3NDUyNjcwM30.BV4ytObY6gt0XUc2IYMOeeOc-NH63TrMVi3lQm9ngyE", 
//       "old_password":document.getElementById("oldPassword").value, 
//       "password":document.getElementById("newPassword").value, 
//       "confirm_password":document.getElementById("confirmPassword").value 
//     } 
//     console.log(data); 
//     const url = "http://localhost:5000/profile/edit/user/password"; 
//     const options = { 
//         method: "POST", 
//         body: JSON.stringify(data), 
//         headers: { 
//             "Content-Type": "application/json", 
//         } 
//     } 
//     const res = await fetch(url,options); 
//     const body = await res.json(); 
//     console.log(body); 
//     if(!body.status == "Error") invokeModal(false); 
//     else setError(body.error); 
//   } 
 
//   //compelete showing errors 
//   const handelError = ()=>{ 
//     if(error){ 
//       return( 
//         <span>{error.message}</span> 
//       ); 
//     } 
//   } 
 
  return ( 
    <> 
       <FontAwesomeIcon className="iconClass" onClick={initModal}  icon={faArrowRight} />
      <Modal show={isShow} > 
        <Modal.Header closeButton onClick={initModal} className="formCol"> 
          <Modal.Title>Appointment Details</Modal.Title> 
        </Modal.Header> 
        <Modal.Body className="formCol"> 
          <form> 
            <div class="form-group"> 
               
               <table>
                <tbody className='textCol'>
                  <tr>
                    <td >Reiki Name : </td>
                    <td>{data.reiki_id.name}</td>
                  </tr>
                  <tr>
                    <td>Order ID :</td>
                    <td>{data._id} </td>
                  </tr>
                  <tr>
                    <td>Client Name :</td>
                    <td>{data.user_id.first_name} {data.user_id.last_name}</td>
                  </tr>
                  <tr>
                    <td>{
                      data.start_time!=null?(<div>Start Time :</div> ):<></>
                    }</td>
                    
                  </tr>
                  <tr>
                    <td>
                      { /*
                        data.meeting_link?(<div>Meeting link : {data.meeting_link}</div>):<></>
                      */ }
                      <UpdateMeetingLinkModal meeting={data.meeting_link} />

                    </td>
                  </tr>
                </tbody>
               </table>
      
            </div>
          </form>     
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
export default InstructorUpcomingAppointmentDetailsModal;