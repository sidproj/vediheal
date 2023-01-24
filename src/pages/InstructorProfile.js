import {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import "./UserProfile.css";
import ChangePasswordModal from "./modals/ChangePasswordModal"
import AddService from "./modals/AddService"
import 'bootstrap/dist/css/bootstrap.min.css';

const InstructorProfile = ()=>{

    
    const [instructor,setInstructor] = useState();
    const [instructorReikies,setInstructorReikies] = useState([]);
    const [reikies,setReikies] = useState([]);

    const getInstructorData = async ()=>{
        const data = {
            // change this later
            jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY1Zjg2YmU2NzM1NjJlNDI5MjczNiIsImlhdCI6MTY3NDQyMTY5OH0.KZppnURCDKsfzat3b10h-Pi4UJW5zOT98AeGtyzyOhY",

        }
        const url = "http://localhost:5000/profile/instructor";
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const res = await fetch(url,options);
        const body = await res.json();
        setInstructor(body.instructor);
        setInstructorReikies(body.instructor.reikies);
    }

    const getReikiData = async ()=>{
        const url = "http://localhost:5000/reiki";
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
            "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY1Zjg2YmU2NzM1NjJlNDI5MjczNiIsImlhdCI6MTY3NDUyODcyM30.jG4pUrC2M6iRsAtBb6QpqYXGusf9RnNOjQgBEmH4xzo",
            "first_name":document.getElementById("inputFirstName").value,
            "last_name":document.getElementById("inputLastName").value,
            "email":document.getElementById("inputEmailAddress").value,
            "phone_no":document.getElementById("inputPhone").value
        }
        const url = "http://localhost:5000/profile/edit/instructor";
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
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue={instructor?.first_name} />
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue={instructor?.last_name} />
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue={instructor?.email} />
                        </div>
                        
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue={instructor?.phone_no} />
                            </div>
                      
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3">
                                <div>
                                    <AddService 
                                        reikies={reikies} 
                                        instructorReikies={instructorReikies} 
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">                                
                                    <ChangePasswordModal />
                            </div>
                            
                        </div>
                        <div className="row gx-3 mb-3">
                            
                            <div className="col-md-6 mb-3">
                                <button className="btn btn-col" type="button" onClick={handelDataChange} >Save changes</button>
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