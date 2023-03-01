import {React,useLayoutEffect, useEffect,useState} from "react";
import { Modal, Button } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ChangePasswordModal from "./modals/ChangePasswordModal"
import AddService from "./modals/AddService"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import "./InstructorProfile.css"

const InstructorProfile = (props)=>{

    const history = useHistory();
    useLayoutEffect(()=>{
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);

    const [isShow, invokeModal] = useState(false);
    const [error, setError] = useState();
    const initModal = () => {
        return invokeModal(!isShow)
    }

const handelChangePassword = async()=>{
    const data = {
      "jwt":props.instructorJWT,
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

    const [instructor,setInstructor] = useState();
    const [instructorReikies,setInstructorReikies] = useState([]);
    const [reikies,setReikies] = useState([]);

    const getInstructorData = async ()=>{
        const data = {
            jwt:props.instructorJWT,
        }
        const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/profile/instructor";
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
        setInstructor(body.instructor);
        setInstructorReikies(body.instructor.reikies);
    }

    const getReikiData = async ()=>{
        const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/reiki";
        const options = {
          method: 'GET', 
        }
        const result = await fetch(url,options);
        const body = await  result.json();
        setReikies(body);
    }

    
    useEffect(()=>{
        getInstructorData();
        getReikiData();
    },[]);

    const handelDataChange= async()=>{
        const data = {
            "jwt":props.instructorJWT,
            "first_name":document.getElementById("inputFirstName").value,
            "last_name":document.getElementById("inputLastName").value,
            "email":document.getElementById("inputEmailAddress").value,
            "phone_no":document.getElementById("inputPhone").value,
            "description":document.getElementById("description").value
        }
        const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/profile/edit/instructor";
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
    }

  const appointmentDetails = useHistory();
    function appointmentDetailsClick() {
    appointmentDetails.push("/instructorappointmentdetails");
  }

    return (

        <>

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
    

       

        
        <div className="container-xl px-4 mt-8">
            
    <div className="row" >
       
        <div className="col-xl-8 mx-auto">
            <div className="cardNew mb-4 form">
                
                <div className="card-body form">
                    <form >
                    <div className="text-center large mb-4 header">Account Details</div>
                        <div className="row gx-3 mb-3">
                         
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">First name</label>
                                <input className="form-control transparent-input" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue={instructor?.first_name} />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <input className="form-control transparent-input " id="inputLastName" type="text" placeholder="Enter your last name" defaultValue={instructor?.last_name} />
                            </div>
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                <input className="form-control transparent-input " id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue={instructor?.email} />
                            </div>

                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="form-control transparent-input " id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue={instructor?.phone_no} />
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Description</label>
                                <textarea className="form-control transparent-input " id="description" type="tel" placeholder="Enter your description" defaultValue={instructor?.description} />
                            </div>
                      
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3 ">
                                <div>
                                    <AddService 
                                        reikies={reikies} 
                                        instructorReikies={instructorReikies} 
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">                                
                                    <button onClick={initModal} class="btn cardbg" type="button">
                                        Change Password
                                    </button>
                            </div>
                            
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3">
                                <button className="btn cardbg" type="button" onClick={handelDataChange} >Save changes</button>
                            </div>
                            
                      
                        </div>
               
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
        );

}
export default InstructorProfile;