
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
import ConfirmBooking from './pages/confirmBookin';

function App() {


  return (
    <Router>
      <SideBar/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/account" element={<UserAccount/>}/>

        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/servicedetails" element={<DetailedService/>}/>
        <Route exact path="/confirmbooking" element={<ConfirmBooking/>}/>

        <Route exact path="/upcomingappointment" element={<UpcomingAppointments/>}/>
        <Route exact path="/previousappointment" element={<PreviousAppointment/>}/>

        <Route exact path="/about-us" element={<AboutUs/>}></Route>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>
  );
}

export default App;
