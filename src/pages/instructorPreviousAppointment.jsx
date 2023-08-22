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
import { instructorAtom } from "../Recoil/instructor"
import { useEffect, useState } from "react";
import configs from "../config.json";
import { instructorPreviousAppointmentsAtom } from "../Recoil/instructorPreviousAppointments"
import Loading from "../components/loading";
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

const Caption1 = styled.h1`
  color:#ff4d4d;
  font-size:1.75rem;
  font-weight:600;
  text-align:center;
`

const InstructorPreviousAppointment = ()=>{

    // fetch api call to previous appointmetns of user and  
    // save it in recoil state
    // if none display something
    
    const [loading,setLoading] = useState(false);
    // for animation on service cards
    const [animationParent] = useAutoAnimate();

    const [instructor,setInsturctor] = useRecoilState(instructorAtom);
    const [appointmentModal,setAppointmentModal] = useRecoilState(AppointmentModalAtom);
    const [appointments,setAppointments] = useRecoilState(instructorPreviousAppointmentsAtom);


    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    const getAppointments = async ()=>{
        setLoading(true);
        const url = configs.SERVER_URL+"/appointment/instructor";
        const options = {
            method: "POST",
            body: JSON.stringify({
                jwt:instructor?.jwt,
                is_completed:true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(!data.error){
            setAppointments(data);
            setLoading(false);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(!instructor)navigate("/instructor/login");
        if(appointments == null)getAppointments();
    },[]);

    return(
        <>
            {
                appointmentModal && <AppointmentModal/>
            }
            <Header/>
            <AppointmentTitle>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName><div>Previous Appointments</div><FontAwesomeIcon icon={faRefresh} onClick={getAppointments} /></CaptionName>
            </AppointmentTitle>
            <Caption1>Previous Appointment</Caption1>
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

export default InstructorPreviousAppointment;