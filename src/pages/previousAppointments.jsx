import { styled } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import Appointment from "../components/appointment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faRefresh } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { AppointmentModalAtom } from "../Recoil/appintmentModal"
import AppointmentModal from "../components/appointmentModal"
import { userAtom } from "../Recoil/user"
import { previousAppointmentsAtom } from "../Recoil/previousAppointments"
import config from "../config.json";
import { useEffect, useState } from "react"
import Loading from "../components/loading"
import { useAutoAnimate } from '@formkit/auto-animate/react';

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
    display:flex;
    flex-direction:row;
    column-gap:1rem;
`

const PreviousAppointment = ()=>{

    // fetch api call to previous appointmetns of user and  
    // save it in recoil state
    // if none display something

    const [loading,setLoading] = useState(false);
    // for animation on service cards
    const [animationParent] = useAutoAnimate();

    const [user,setUser] = useRecoilState(userAtom);
    const [appointments,setAppointments] = useRecoilState(previousAppointmentsAtom);
    const [appointmentModal,setAppointmentModal] = useRecoilState(AppointmentModalAtom);

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    const getAppointments = async ()=>{
        setLoading(true);
        const url = config.SERVER_URL+"/appointment/user/previous";
        const options = {
            method:"POST",
            body: JSON.stringify({
                jwt:user?.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }

        const repsonse = await fetch(url,options);
        const data = await repsonse.json();
        setAppointments(data);
        setLoading(false);
    }

    useEffect(()=>{
        if(!user)navigate("/login");
        if(appointments==null)getAppointments();
    },[]);

    return(
        <>
            {
                appointmentModal && <AppointmentModal getAppointments={getAppointments}/>
            }
            <Header/>
            <AppointmentTitle>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName><div>Past Appointments</div><FontAwesomeIcon icon={faRefresh} onClick={getAppointments}/></CaptionName>
            </AppointmentTitle>
            <AppointmentsContainer ref={animationParent}>
                {
                    loading ?
                    <Loading/> :
                    appointments?.map((appointment,index)=>{
                        return <Appointment key={index} data={appointment}/>
                    })
                }
            </AppointmentsContainer>
            <Footer/>
        </>
    )
}

export default PreviousAppointment;