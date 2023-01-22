import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Modules/Dashboard/Dashboard";
import Service from "./Modules/Service/Service";
import Header from "./Components/Header/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import UserProfile from "./pages/UserProfile";
import InstructorProfile from "./pages/InstructorProfile";
import InstructorProfileView from "./pages/InstructorProfileView";
import Services from './pages/Services';
import Instructor from './pages/Instructor'
import Booking from './pages/Booking'
import InstructorAppointmentDetails from "./pages/InstructorAppointmentDetails"
export default function Routing() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        <switch>
          <Route path="/" exact component={Dashboard} />
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path="/service" component={Service} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/instructorprofile" exact component={InstructorProfile} />
          <Route path="/instructorprofileview" exact component={InstructorProfileView} />
          <Route path="/services" exact component={Services} />
          <Route path="/instructor" exact component={Instructor} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/instructorappointmentdetails" exact component={InstructorAppointmentDetails} />
        </switch>
      </BrowserRouter>
    </div>
  );
}
