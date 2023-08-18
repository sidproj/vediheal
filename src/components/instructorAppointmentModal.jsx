import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { AppointmentModalAtom } from "../Recoil/appintmentModal";
import configs from "../config.json";
import { instructorAtom } from "../Recoil/instructor";
import { instructorUpcomingAppointmentsAtom } from "../Recoil/instructorUpcomingAppointments";
import { useState } from "react";

const Overlay = styled.div`
    z-index:5;
    width:100%;
    height:100%;
    background-color:#00000094;
    position:fixed;
    display:flex;
    justify-content:center;
    flex-direction:row;
    font-family: 'Montserrat', sans-serif;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1rem;
    height:fit-content;
    background-color:white;
    width:100%;
    border-radius:0.5rem;
    padding:1rem 0;
`

const TitleRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem;
`
const Title = styled.div`
    font-size:0.95rem;
    font-weight:500;
`
const Hr = styled.div`
    width:100%;
    height:0.1rem;
    background-color:#eaeaea;
    margin-bottom:1rem;
`

const DetailRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem;
`

const Submit = styled.button`
    width:15em;
    height:2.5em;
    background-color:#ff4d4d;
    color:white;
    font-size:1.2em;
    border:none;
    border-radius:0.5em;
`

const Data = styled.div`
    font-size:0.75rem;
    font-weight:400;
`


const Error = styled.div`
    color:#ff4d4d;
    text-align:center;
    margin:1rem;
`

const InstructorAppointmentModal = (props)=>{

    const [appointmentModal,setAppointmentModal] = useRecoilState(AppointmentModalAtom);
    const [appointments,setAppointments] = useRecoilState(instructorUpcomingAppointmentsAtom);
    const [instructor,setInstructor] = useRecoilState(instructorAtom);

    const [error,setError] = useState("");

    const getDate = (str)=>{
        const date = new Date(str);
        return (date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear());
    }
    
    const getTime = (str)=>{
        const date = new Date(str);
        let hour = date.getHours()+"";
        let min = date.getMinutes()+"";
        if( hour.length == 1) hour = "0"+hour;
        if(min.length == 1) min = "0"+min;
        return (hour+" : "+min);
    }

    const handleSubmit = async()=>{
        const curDate = new Date();
        const date = new Date(appointmentModal.start_time);
        if(curDate < date){
            setError({error:"Can not complete session before time!"})
            return;
        }

        const url = configs.SERVER_URL+"/appointment/instructor/complete";
        const options = {
            method: "POST",
            body: JSON.stringify({
                appointment_id:appointmentModal._id,
                jwt:instructor.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(!data.error){
            setAppointments(data);
            props.notify("Session completed!");
            setAppointmentModal(null);
        }
    }

    return (
        <Overlay>
            <Container>
                <TitleRow>
                    <Title>Appointment Details</Title>
                    <FontAwesomeIcon icon={faClose} onClick={()=>setAppointmentModal(null)}/>
                </TitleRow>
                <Hr/>
                <DetailRow>
                    <Title>Reiki: </Title>
                    <Data>{appointmentModal.reiki_id.name}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Appointment ID: </Title>
                    <Data>{appointmentModal._id}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>User Name: </Title>
                    <Data>{ 
                            appointmentModal.user_id?.first_name ?
                            (appointmentModal.user_id?.first_name +" "+ appointmentModal.instructor_id?.last_name) :
                            "Pending"
                        }</Data>
                </DetailRow>
                <DetailRow>
                    <Title>User Email: </Title>
                    <Data>{appointmentModal.user_id?.email || "Pending"}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Date: </Title>
                    <Data>{ getDate(appointmentModal.start_time) }</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Time: </Title>
                    <Data>{ getTime(appointmentModal.start_time) } </Data>
                </DetailRow>
                <DetailRow>
                    <Title>Meeting Link: </Title>
                    <Data>{appointmentModal.meeting_link || "Pending"}</Data>
                </DetailRow>
                    
                {
                    error && <Error>{error.error}</Error>
                }
                <Hr/>
                <Submit onClick={handleSubmit}>Mark as completed</Submit>
            </Container>
        </Overlay>
    );
}

export default InstructorAppointmentModal;