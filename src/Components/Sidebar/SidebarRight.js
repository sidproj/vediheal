import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import "./Sidebar.css"
import { useHistory } from "react-router-dom";

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const bar = <FontAwesomeIcon icon={faBars} />;

const SidebarRight = ({isLoggedIn, isInstructor}) => {

    const history = useHistory();
    function userProfile() {
    history.push("/userprofile");
  }

  function instructorProfile() {
    history.push("/instructorprofile");
  }

    function instructors() {
    history.push("/instructor");
  }

  function home() {
    history.push("/");
  }

  function login() {
    history.push("/login");
  }


    function services() {
    history.push("/services");
  }

    function booking() {
    history.push("/booking");
  }

  function instructorappointmentdetails() {
    history.push("/instructorappointmentdetails");
  }

  function instructorpastappointmentdetails() {
    history.push("/instructorpastappointmentdetails");
  }

  function appointment() {
    history.push("/userappointmentdetails");
  }

  
   
    const [visibleRight, setVisibleRight] = useState(false);

    function toggleSidebar() { 
        setVisibleRight(false);
    }



    
        if(isInstructor){
            return (
                    <div>

                    <div className="card">                
                        <Sidebar className="card-bg" visible={visibleRight} style={{width:'15em'}} position="right" onHide={() => setVisibleRight(false)}>
  
                          
                            <a onClick={() => {instructorProfile(); toggleSidebar();}} className="sideLinks"><h3>Profile</h3></a><br />
                         
                            <a onClick={() => {instructorappointmentdetails(); toggleSidebar();}} className="sideLinks" ><h3>Appointment</h3></a><br />
                            
                            <a onClick={() => {instructorpastappointmentdetails(); toggleSidebar();}} className="sideLinks" ><h3>Past Appointment</h3></a><br />

                            <a onClick={userProfile} className="sideLinks"><h3>Logout</h3></a>
                        </Sidebar>                
                        
                    </div>
                    <button onClick={() => setVisibleRight(true)} className="btn rounded-circle" ><i>{bar}</i></button>
                </div>
                )
        }        

        else{
          return (
            <div>
            <div className="card">                
                <Sidebar className="card-bg" visible={visibleRight} style={{width:'15em'}} position="right" onHide={() => setVisibleRight(false)}>
                    <a onClick={() => {home(); toggleSidebar();}} className="sideLinks"><h3>Home</h3></a><br />
                    
                    {isLoggedIn ?  (<a onClick={() => {userProfile(); toggleSidebar();}} className="sideLinks"><h3>Profile</h3><br /></a>):<></>}
                    
                    <a onClick={() => {services(); toggleSidebar();}} className="sideLinks" ><h3>Services</h3></a><br />
                   
                    
                    {isLoggedIn && (<><a onClick={() => {appointment(); toggleSidebar();}} className="sideLinks"><h3>Appointment</h3></a><br /></>)}
                    
                    <a onClick={() => {booking(); toggleSidebar();}} className="sideLinks"><h3>Book an Appointment</h3></a>
                    <br />

                    {isLoggedIn ?  (<a onClick={() => {userProfile(); toggleSidebar();}} className="sideLinks"><h3>Logout</h3></a>):(<a onClick={() => {login(); toggleSidebar();}} className="sideLinks"><h3>Login</h3></a>)}
                </Sidebar>                
                
            </div>
            <button   onClick={() => setVisibleRight(true)} className="btn rounded-circle" ><i>{bar}</i></button>
        </div>
        )
        }

}
                
export default SidebarRight;