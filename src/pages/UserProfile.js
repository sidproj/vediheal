import {useEffect,useState} from "react";
import "./UserProfile.css";
import OrdersModal from "./modals/OrdersModal"
import ChangePasswordModal from "./modals/ChangePasswordModal"
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ()=>{

    const [user,setUser] = useState();

    const getData = async ()=>{
        const data = {
            // change this later
            jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzU1ZGZkZDJkN2RkYTk1NTlkNDIyMiIsImlhdCI6MTY3NDQyMTI1Mn0.Gl2sqvPjunPYkVtiq6NbmMYLqZDYKdfrn8QZfCkuWTg",

        }
        const url = "http://localhost:5000/profile/user";
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
            "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzU1ZGZkZDJkN2RkYTk1NTlkNDIyMiIsImlhdCI6MTY3NDUyNTQxM30.8rqjOhEvhNEhxDKdZ9HLC4J0Cnael1PwXQZF3wpi0tM",
            "first_name":document.getElementById("inputFirstName").value,
            "last_name":document.getElementById("inputLastName").value,
            "email":document.getElementById("inputEmailAddress").value,
            "phone_no":document.getElementById("inputPhone").value
        }
        const url = "http://localhost:5000/profile/edit/user";
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
        setUser(body.user);
    }

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
                                <input class="form-control" id="inputFirstName" type="text" defaultValue={user?.first_name}  />
                            </div>
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text" defaultValue={user?.last_name} />
                            </div>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-mb-6">
                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                <input class="form-control" id="inputEmailAddress" type="email" defaultValue={user?.email}  />
                            </div>

                            
                                
                        </div>

                        
                        
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" defaultValue={user?.phone_no}  />
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
                                <button class="btn btn-col" type="button" onClick={handelDataChange}>Save changes</button>
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