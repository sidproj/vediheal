import {useEffect,useLayoutEffect,useState} from "react";
import "./UserProfile.css";
import { Modal, Button } from 'react-bootstrap'
import OrdersModal from "./modals/OrdersModal"
import ChangePasswordModal from "./modals/ChangePasswordModal"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

const UserProfile = (props)=>{

    
    // authenticating
    const history = useHistory();
    useEffect(()=>{
        if(!props.userJWT){
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
      
      "jwt":props.userJWT,
      "old_password":document.getElementById("oldPassword").value,
      "password":document.getElementById("newPassword").value,
      "confirm_password":document.getElementById("confirmPassword").value
    }

    console.log(data);
    const url = "https://vediheal-backend.vercel.app/profile/edit/user/password";
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(url,options);
    const body = await res.json();
    // console.log(body);
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
    const [user,setUser] = useState();

    const getData = async ()=>{
        const data = {
            // change this later
            jwt:props.userJWT,

        }
        const url = "https://vediheal-backend.vercel.app/profile/user";
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const res = await fetch(url,options);
        const body = await res.json();
        setUser(body.user);
    }

    useEffect(()=>{
        getData();
    },[]);

    const handelDataChange= async()=>{
        const data = {
            "jwt":props.userJWT,
            "first_name":document.getElementById("inputFirstName").value,
            "last_name":document.getElementById("inputLastName").value,
            "email":document.getElementById("inputEmailAddress").value,
            "phone_no":document.getElementById("inputPhone").value
        }
        const url = "https://vediheal-backend.vercel.app/profile/edit/user";
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const res = await fetch(url,options);
        const body = await res.json();
        // console.log(body);
        setUser(body.user);
    }

    return (

        <>

      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Change Your Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              
              <input classNameName="input" type="password" className="form-control" id="oldPassword" placeholder="Enter Current Password" />
              <br />
              <input classNameName="input" type="password" className="form-control" id="newPassword" placeholder="Enter New Password" />
              <br />
              <input classNameName="input" type="password" className="form-control" id="confirmPassword" placeholder="Confirm New Password" />
             
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
          <button type="submit" className="btn btn-danger" onClick={handelChangePassword} >Submit</button>
         </Modal.Footer>
      </Modal>

        <div classNameName="mx-auto">

        
        <div className="container-xl mt-8" >
            
    <div className="row">
        
        <div className="col-xl-8 mx-auto">
            <div className="card mb-4 mx-auto">
                
                <div className="card-body form">
                    <form>
                    <div classNameName="text-center large mb-4 header">Account Details</div>
                      
                        <div className="row gx-3 mb-3">
                         
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">First name</label>
                                <input className="form-control transparent-input" id="inputFirstName" type="text" defaultValue={user?.first_name}  />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <input className="form-control transparent-input" id="inputLastName" type="text" defaultValue={user?.last_name} />
                            </div>
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-mb-6">
                                <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                <input className="form-control transparent-input" id="inputEmailAddress" type="email" defaultValue={user?.email}  />
                            </div>  
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="form-control transparent-input" id="inputPhone" type="tel" defaultValue={user?.phone_no}  />
                            </div>
                      
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3">
                                <button className="btn " type="button" onClick={handelDataChange}>Save changes</button>
                            </div>
                            <div className="col-md-6">                                
                                    <button onClick={initModal} className="btn" type="button">
                                        Change Password
                                    </button>
                            </div>
                            
                        </div>
                        
               
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div></div></>

        );

}
export default UserProfile;