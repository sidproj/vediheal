import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../UserProfile.css'
function ChangePasswordModal(props) {
  const [isShow, invokeModal] = React.useState(false);
  const [error, setError] = useState();
  const initModal = () => {
    return invokeModal(!isShow)
  }

  // type this code in user profile page and in instructor profile page
  const handelChangePassword = async()=>{
    const data = {
      
      "jwt":props.userJWT,
      "old_password":document.getElementById("oldPassword").value,
      "password":document.getElementById("newPassword").value,
      "confirm_password":document.getElementById("confirmPassword").value
    }
    console.log(data);
    const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/profile/edit/user/password";
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(url,options);
    const body = await res.json();
    console.log(body);
    if(!body.status == "Error") invokeModal(false);
    else setError(body.error);
  }

  //compelete showing errors
  const handelError = ()=>{
    if(error){
      return(
        <span>{error.message}</span>
      );
    }
  }

  return (
    <>
       <button onClick={initModal} class="btn btn-col" type="button">
        Change Password
      </button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Change Your Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              
              <input type="password" class="form-control" id="oldPassword" placeholder="Enter Current Password" />
              <br />
              <input type="password" class="form-control" id="newPassword" placeholder="Enter New Password" />
              <br />
              <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm New Password" />
             
            </div>
            <div>
              <center><span>{handelError}</span></center>
            </div>
          </form>    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <button type="submit" class="btn btn-danger" onClick={handelChangePassword} >Submit</button>
         </Modal.Footer>
      </Modal>
    </>
  )
}
export default ChangePasswordModal;
