import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { AppointmentModalAtom } from "../Recoil/appintmentModal";
import { userAtom } from "../Recoil/user";
import { useEffect, useRef, useState } from "react";
import configs from "../config.json";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
    margin-top:0.5rem;
`

const DetailRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem;
`

const Data = styled.div`
    font-size:0.75rem;
    font-weight:400;
`
const Submit = styled.button`
    width:15em;
    height:2.5em;
    background-color:#ff4d4d;
    color:white;
    font-size:1em;
    border:none;
    border-radius:0.5em;
    margin-bottom:0.5rem;
    margin-top:0.5rem;
`

const TextField = styled.input`
    height:2.5rem;
    width:16em;
    font-size:1em;
    background-color:#f6f1eb;
    border-radius:0.5em;
    border:solid 1px #c5ccd6;
    padding:0.2em 1em;
    color:#212529;
    margin-top:0.5em;
    &:focus{
        outline: 0 none;
    }
`
const TextArea = styled.textarea`
    height:7rem;
    width:16em;
    font-size:1em;
    background-color:#f6f1eb;
    border-radius:0.5em;
    border:solid 1px #c5ccd6;
    padding:0.2em 1em;
    color:#212529;
    margin-top:0.5em;
    font-family: 'Montserrat', sans-serif;
    &:focus{
        outline: 0 none;
    }
`
const Error = styled.div`
    color:#ff4d4d;
    margin:1rem;
    text-align:center;
`

const AppointmentModal = (props)=>{

    // toast
    const notify = (msg) => {
        toast.success(msg, {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    };

    const [appointmentModal,setAppointmentModal] = useRecoilState(AppointmentModalAtom);
    const ref = useRef();
    ref.appointmentModal = appointmentModal;
    const [user,setUser] = useRecoilState(userAtom);

    const [star,setStar] = useState(null);
    const [feedback,setFeedback] = useState("");
    const [error,setError] = useState(null);

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

    const handleCancellation = async ()=>{
        const url = configs.SERVER_URL+"/appointment/cancel";
        const options = {
            method: "POST",
            body: JSON.stringify({
                appointment_id:appointmentModal._id,
                jwt:user.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.status == "success"){
            notify("Appointment cancelled.");
            setAppointmentModal((oldState)=>{
                return{
                    ...oldState,
                    status:data.appointment.status,
                }
            });
            props.getAppointments();
            setAppointmentModal(null);
        }
    }

    const handleFeedback = async()=>{
        if( !(1<=star && star<=5)){
            setError({error:"Please enter valid rating(1-5)!"});
            return;
        }
        if(feedback.length < 5){
            setError({error:"Feedback should have at least 5 charachters!"})
            return;
        }
        const url = configs.SERVER_URL+"/review";
        const options = {
            method: "POST",
            body: JSON.stringify({
                appointment_id:appointmentModal._id,
                rating:star,
                feedback:feedback,
                jwt:user.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.status == "success"){
            notify("Feedback submited successfully!");
            setAppointmentModal((oldState)=>{
                return{
                    ...oldState,
                    feedback:data.feedback,
                }
            });
        }
    }

    const showFeedbackForm = ()=>{
        return(
            <>
                <Hr/>
                <Title>Session Feedback</Title>
                <TextField
                    placeholder="Rating (out of 5)"
                    type="number"
                    value={star}
                    onChange={(e)=>setStar(e.target.value)}
                />
                <TextArea 
                    placeholder="feedback"
                    value={feedback} 
                    onChange={(e)=>setFeedback(e.target.value)}
                />
                {
                    error && <Error>{error.error}</Error>
                }
                {
                    (ref.appointmentModal.feedback==null) && <Submit onClick={handleFeedback}>Submit Feedback</Submit>
                }
                
            </>
        );
    }
    
    useEffect(()=>{
        if(ref.appointmentModal?.feedback!=null){
            setStar(appointmentModal.feedback.stars);
            setFeedback(appointmentModal.feedback.data);
        }
    },[]);


    return (
        <>
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
                    <Title>Insturctor Name: </Title>
                    <Data>{ 
                            appointmentModal.instructor_id?.first_name ?
                            (appointmentModal.instructor_id?.first_name +" "+ appointmentModal.instructor_id?.last_name) :
                            "Pending"
                        }</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Insturctor Email: </Title>
                    <Data>{appointmentModal.instructor_id?.email || "Pending"}</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Date: </Title>
                    <Data>{ getDate(appointmentModal.start_time) }</Data>
                </DetailRow>
                <DetailRow>
                    <Title>Time: </Title>
                    <Data>{ getTime(appointmentModal.start_time) } </Data>
                </DetailRow>
                {
                    (appointmentModal.is_completed == false ) &&
                    <>
                        <DetailRow>
                            <Title>Meeting Link: </Title>
                            <Data>{appointmentModal.meeting_link || "Pending"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Title>Appointment Status: </Title>
                            <Data>{ appointmentModal.status || "PLACED" } </Data>
                        </DetailRow>
                    </>
                }
                {
                    (user && appointmentModal.is_completed) && 
                    showFeedbackForm()
                }
                {
                    (user && !appointmentModal.is_completed && (appointmentModal.status == "PLACED" || !appointmentModal.status)) &&
                    <Submit onClick={handleCancellation}>Cancel Appointment</Submit>
                }
            </Container>
            <ToastContainer theme="dark" />
        </Overlay>
        </>
    );
}

export default AppointmentModal;