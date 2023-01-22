import {useEffect,useState} from "react";
import "./UserProfile.css";
import OrdersModal from "./modals/OrdersModal"
import ChangePasswordModal from "./modals/ChangePasswordModal"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const UserProfile = ()=>{

const [passwordShown, setPasswordShown] = useState(false);
const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
    return (
        <div>

        
        <div class="container-xl px-4 mt-8">
            
    <div class="row">
        
        <div class="col-xl-8 mx-auto">
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                      
                        <div class="row gx-3 mb-3">
                         
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name"  />
                            </div>
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-mb-6">
                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address"  />
                            </div>

                            
                                
                        </div>

                        
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number"  />
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Password</label>
                                <div className="icon"><input class="form-control" type={passwordShown ? "text" : "password"} id="inputPassword" value="1234" readonly / ><i onClick={togglePasswordVisiblity}>{eye}</i></div>

                            </div>
                      
                        </div>
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <div></div>
                            </div>
                            <div class="col-md-6">                                
                                    <ChangePasswordModal />
                            </div>
                            
                        </div>
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6 mb-3">
                                <button class="btn btn-col" type="button">Save changes</button>
                            </div>
                            <div class="col-md-6">                                
                                    <OrdersModal />
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
export default UserProfile;