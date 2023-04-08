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

const SidebarRight = (props) => {
  const {isLoggedIn, isInstructor}= props;
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
    history.push("/instructorupcomingappointmentdetails");
  }

  function instructorpastappointmentdetails() {
    history.push("/instructorpastappointmentdetails");
  }

  function userpastappointment() {
    history.push("/userpastappointmentdetails");
  }

  function upcomingAppointment() {
    history.push("/userupcomingappointmentdetails");
  }

  function schedule(){
    history.push("/instructorSchedule");
  }

  function viewSchedule(){
    history.push("/viewschedule");
  }

  function privacypolicy(){
    history.push("/privacypolicy");
  }

  function aboutus(){
    history.push("/aboutus");
  }
  
   
    const [visibleRight, setVisibleRight] = useState(false);

    function toggleSidebar() { 
        setVisibleRight(false);
    }

    const handelLogout = ()=>{
      props.setUserJWT(undefined);
      props.setInstructorJWT(undefined);
      history.push("/login");
    }

    
        if(props.instructorJWT!=undefined){
            return (
                    <div>               
                        <Sidebar className="card-bg" visible={visibleRight} style={{width:'15em'}} position="right" onHide={() => setVisibleRight(false)}>
  
                            <a onClick={() => {instructorappointmentdetails(); toggleSidebar();}} className="sideLinks" ><div>UPCOMING APPOINTMENT</div></a><br />
                            
                            <a onClick={() => {instructorpastappointmentdetails(); toggleSidebar();}} className="sideLinks" ><div>PAST APPOINTMENT</div></a><br />

                            <a onClick={()=> {schedule();toggleSidebar();}} className="sideLinks"><div>ADD SCHEDULE</div></a><br/>

                            <a onClick={()=> {viewSchedule();toggleSidebar();}} className="sideLinks"><div>VIEW SCHEDULE</div></a><br/>

                            <a onClick={() => {instructorProfile(); toggleSidebar();}} className="sideLinks"><div>PROFILE</div></a><br />

                            <a onClick={() => {privacypolicy(); toggleSidebar();}} className="sideLinks"><div>PRIVACY POLICY</div></a><br />

                            <a onClick={() => {aboutus(); toggleSidebar();}} className="sideLinks"><div>ABOUT US</div></a><br />

                            <a onClick={() => {handelLogout(); toggleSidebar();}} className="sideLinks"><div>LOGOUT</div></a>
                        </Sidebar>
                    <button onClick={() => setVisibleRight(true)} className="btn rounded-circle" ><i>{bar}</i></button>
                </div>
                )
        }        

        else{
          return (
            <div>               
                <Sidebar className="card-bg" visible={visibleRight} style={{width:'15em'}} position="right" onHide={() => setVisibleRight(false)}>
                    <a onClick={() => {home(); toggleSidebar();}} className="sideLinks"><div>HOME</div></a><br />
                    
                    {(props.userJWT!=undefined) ?  (<a onClick={() => {userProfile(); toggleSidebar();}} className="sideLinks"><div>PROFILE</div><br /></a>):<></>}
                    
                    <a onClick={() => {services(); toggleSidebar();}} className="sideLinks" ><div>SERVICES</div></a><br />
                   
                    
                    {(props.userJWT!=undefined)  && (<><a onClick={() => {upcomingAppointment(); toggleSidebar();}} className="sideLinks"><div>UPCOMING APPOINTMENT</div></a><br /></>)}
                    {(props.userJWT!=undefined)  && (<><a onClick={() => {userpastappointment(); toggleSidebar();}} className="sideLinks"><div>PAST APPOINTMENT</div></a><br /></>)}
                    
                    {/* <a onClick={() => {booking(); toggleSidebar();}} className="sideLinks"><div>Book an Appointment</div></a>
                    <br /> */}

                    <a onClick={() => {privacypolicy(); toggleSidebar();}} className="sideLinks"><div>PRIVACY POLICY</div></a><br />

                    <a onClick={() => {aboutus(); toggleSidebar();}} className="sideLinks"><div>ABOUT US</div></a><br />

                    {(props.userJWT!=undefined)  ?  (<a onClick={() => {handelLogout(); toggleSidebar();}} className="sideLinks"><div>LOGOUT</div></a>):(<a onClick={() => {login(); toggleSidebar();}} className="sideLinks"><div>LOGIN</div></a>)}
                </Sidebar>                
            <button   onClick={() => setVisibleRight(true)} className="btn rounded-circle" ><i>{bar}</i></button>
        </div>
        )
        }

}
                
export default SidebarRight;