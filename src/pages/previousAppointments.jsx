import { styled } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import Appointment from "../components/appointment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"

const AppointmentsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em;
    justify-content:center;
    row-gap:1em;
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

const PreviousAppointment = ()=>{

    // fetch api call to previous appointmetns of user and  
    // save it in recoil state
    // if none display something

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    return(
        <>
            <Header/>
            <AppointmentTitle>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName>Past Appointments</CaptionName>
            </AppointmentTitle>
            <AppointmentsContainer>
                <Appointment/>
                <Appointment/>
                <Appointment/>
            </AppointmentsContainer>
            <Footer/>
        </>
    )
}

export default PreviousAppointment;