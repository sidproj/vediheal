import {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import "./UserProfile.css";
import AppointmentModal from "./modals/AppointmentModal"
import ChangePasswordModal from "./modals/ChangePasswordModal"
import AddService from "./modals/AddService"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const InstructorProfile = ()=>{

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const appointmentDetails = useHistory();
    function appointmentDetailsClick() {
    appointmentDetails.push("/instructorappointmentdetails");
  }

    return (
        <div>

        
        <div className="container-xl px-4 mt-8">
            
    <div className="row" >
       
        <div className="col-xl-8 mx-auto">
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <form>
                      
                        <div className="row gx-3 mb-3">
                         
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">First name</label>
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie" />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna" />
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Password</label>
                                <div className="icon"> <input class="form-control" type={passwordShown ? "text" : "password"} id="inputPassword" value="12345" readonly / >
                                                            
                                                            <i onClick={togglePasswordVisiblity}>{eye}</i>
                                                            </div>
                            </div>
                      
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3">
                                <div><AddService /></div>
                            </div>
                            <div className="col-md-6">                                
                                    <ChangePasswordModal />
                            </div>
                            
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3">
                                <button className="btn btn-col" type="button">Save changes</button>
                            </div>
                            <div className="col-md-6">                                
                                    <button onClick={appointmentDetailsClick} class="btn btn-col" type="button">
        Appointment
      </button>
                            </div>
                      
                        </div>
               
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div></div>

        );

}
export default InstructorProfile;