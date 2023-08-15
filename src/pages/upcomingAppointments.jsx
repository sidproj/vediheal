import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import Appointment from "../components/appointment";
import { Link, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppointmentsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em;
    justify-content:center;
    row-gap:1em;
`

const LinkButton = styled.div`
    font-size:1.2em;
    padding:1em;
    border-radius:2rem;
    background-color:#ff4d4d;
    color:white;
    text-align:center;
`

const AppointmentTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:1.5rem;
    margin-bottom:0rem;
`

const CaptionName = styled.div`
    font-size:1.2rem;
    font-weight:500;
    align-self:center;
`

const UpcomingAppointments = ()=>{

    // fetch api call to previous appointmetns of user and  
    // save it in recoil state
    // if none display something

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    return (
        <>
            <Header/>
            
            <AppointmentTitle>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName>Upcoming Appointments</CaptionName>
            </AppointmentTitle>

            <AppointmentsContainer>
                <Link to="/services"><LinkButton>Book Your Appointment</LinkButton></Link>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
            </AppointmentsContainer>
            <Footer/>
        </>
    )
}

export default UpcomingAppointments;