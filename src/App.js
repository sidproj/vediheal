
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import PrivacyPolicy from './pages/privacyPolicy';
import AboutUs from './pages/about';
import SideBar from './components/sidebar';
import Services from './pages/services';
import UpcomingAppointments from './pages/upcomingAppointments';
import PreviousAppointment from './pages/previousAppointments';
import UserAccount from './pages/userAccount';
import DetailedService from './pages/detailedService';
import ConfirmBooking from './pages/confirmBooking';
import InstructorAccount from './pages/instructorAccount';
import InstructorLogin from './pages/instructorLogin';
import InstructorUpcomingAppointments from './pages/instructorUpcomingAppointments';
import InstructorPreviousAppointment from './pages/instructorPreviousAppointment';
import ContactUs from './pages/contactUs';

function App() {


  return (
    <Router>
      <SideBar/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        
        {/* user */}
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/servicedetails" element={<DetailedService/>}/>

        {/* the 4 routes below require user to be logged in */}
        <Route exact path="/account" element={<UserAccount/>}/>
        <Route exact path="/confirmbooking" element={<ConfirmBooking/>}/>
        <Route exact path="/appointment/upcoming" element={<UpcomingAppointments/>}/>
        <Route exact path="/appointment/previous" element={<PreviousAppointment/>}/>

        {/* Instructor */}
        {/* the 4 routes below require instructor to be logged in */}
        <Route exact path="/instructor/login" element={<InstructorLogin/>}/>
        <Route exact path="/instructor/account" element={<InstructorAccount/>}/>
        <Route exact path="/instructor/appointment/upcoming" element={<InstructorUpcomingAppointments/>}/>
        <Route exact path="/instructor/appointment/previous" element={<InstructorPreviousAppointment/>}/>
        

        {/* common routes */}
        <Route exact path="/about-us" element={<AboutUs/>}/>
        <Route exact path="/contact-us" element={<ContactUs/>}/>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>
  );
}

export default App;
