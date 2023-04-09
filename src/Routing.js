import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Modules/Dashboard/Dashboard";
import Service from "./Modules/Service/Service";
import Header from "./Components/Header/Header";
import Login from "./pages/Login";
import InstructorLogin from "./pages/InstructorLogin";
import SignUp from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import InstructorProfile from "./pages/InstructorProfile";
import InstructorProfileView from "./pages/InstructorProfileView";
import Services from "./pages/Services";
import Instructor from "./pages/Instructor";
import Booking from "./pages/Booking";
import InstructorAppointmentDetails from "./pages/InstructorAppointmentDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import InstructorPastAppointmentDetails from "./pages/InstructorPastAppointmentDetails";
import UserAppointmentDetails from "./pages/UserAppointmentDetails";
import UserUpcomingAppointmentDetails from "./pages/UserUpcomingAppointmentDetails";
import UserPastAppointmentDetails from "./pages/UserPastAppointmentDetails";
import InstructorUpcomingAppointmentDetails from "./pages/InstructorUpcomingAppointmentDetails";
import InstructorSchedule from "./Modules/Service/CheckoutModal/instructorSchedule";
import ViewSchedule from "./pages/ViewSchedule";
import RazorPay from "./Modules/Service/CheckoutModal/razorpayGateway";

export default function Routing(props) {
  return (
    <div>
      <BrowserRouter>
        <Header {...props} />
        <switch>
          
          <Route path='/login' exact 
            render={()=><Login {...props}/>}/>
          <Route path='/instructorlogin' exact 
            render={()=><InstructorLogin {...props}/>}/>  
          
          <Route path="/" exact 
            render={()=><Dashboard {...props}/>} />
          
          
          <Route path='/signup' exact 
            render={()=><SignUp {...props}/>}/>
          
          {/* done authenticating */}
          <Route path="/service" render={() => <Service {...props} />} />

          {/* done authenticating */}
          <Route
            path="/userprofile"
            exact
            render={() => <UserProfile {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/instructorprofile"
            exact
            render={() => <InstructorProfile {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/instructorprofileview"
            exact
            render={() => <InstructorProfileView {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/services"
            exact
            render={() => <Services {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/instructor"
            exact
            render={() => <Instructor {...props} />}
          />

          <Route path="/booking" exact render={() => <Booking {...props} />} />

          <Route
            path="/instructorSchedule"
            exact
            render={() => <InstructorSchedule {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/instructorappointmentdetails"
            exact
            render={() => <InstructorAppointmentDetails {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/instructorpastappointmentdetails"
            exact
            render={() => <InstructorPastAppointmentDetails {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/instructorupcomingappointmentdetails"
            exact
            render={() => <InstructorUpcomingAppointmentDetails {...props} />}
          />

          {/* done authenticating */}
          <Route
            path="/userupcomingappointmentdetails"
            exact
            render={() => <UserUpcomingAppointmentDetails {...props} />}
          />

          <Route
            path="/userpastappointmentdetails"
            exact
            render={() => <UserPastAppointmentDetails {...props} />}
          />

          <Route
            path="/privacypolicy"
            exact
            render={() => <PrivacyPolicy {...props} />}
          />

          <Route path="/aboutus" exact render={() => <AboutUs {...props} />} />

          <Route
            path="/viewschedule"
            exact
            render={() => <ViewSchedule {...props} />}
          />

          <Route path="/pay" exact render={() => <RazorPay {...props} />} />
        </switch>
      </BrowserRouter>
    </div>
  );
}
