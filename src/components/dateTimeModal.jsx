import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { styled } from "styled-components"

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
    margin:0.5rem 1rem 0rem 1rem;
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
    margin-top:1rem;
`

const TextField = styled.input`
    height:2.5rem;
    width:20em;
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
const Label = styled.div`
    font-size:0.9rem;
    color:#212529;
    margin-left:0.25rem;
`

const Field = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin-bottom:1rem;
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

const Error = styled.div`
    color:#ff4d4d;
    margin:0.5rem 2rem 1rem 2rem;
    text-align:center;
    
`


const DateTimeModal = (props)=>{

    const [date,setDate] = useState(null);
    const [time,setTime] = useState(null);
    const [error,setError] = useState(null);

    const handleDateChange = (e)=>{
        setDate(e.target.value);
    }

    const handleTimeChange = (e)=>{
        setTime(e.target.value);
    }

    const dateValidation = (date)=>{
        // check if selected date time is 24 hours after current date time
        const curDate = Date.now();
        const hours = (date - curDate) / (1000*60*60);
        if(hours < 24){
            setError({error:"Selected date should be 24 hours from now!"});
            return false;
        }
        // check if time is between 10:00 am to 7:00 pm

        const startTime = new Date(date);
        startTime.setHours(10);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        const endTime = new Date(date);
        endTime.setHours(19);
        endTime.setMinutes(0);
        endTime.setSeconds(0);

        if( !(startTime <= date && date <= endTime ) ){
            setError({error:"Selecte time between 10 AM to 7PM"});
            return false;
        }


        return true;
    }

    const handleSubmit = ()=>{
        setError(null);
        if(date==null){
            setError({error:"Please select date!"});
            return;
        }
        if(time==null){
            setError({error:"Please select time!"});
            return;
        }
        const finalDate = new Date(date);
        const hour = time.split(":")[0];
        const min = time.split(":")[1];

        finalDate.setHours(hour);
        finalDate.setMinutes(min);

        if(!dateValidation(finalDate)) return;

        const key = props.forSession;
        
        props.setDateTime((oldState)=>{
            return {
                ...oldState,
                [key]:finalDate
            }
        });

        props.setDateTimeModal(false);
    }

    return(
        <Overlay onClick={()=>props.setDateTimeModal(false)}>
            <Container onClick={(e)=>{e.stopPropagation();}}>
                <TitleRow>
                    <Title>Select Appointment Date and Time</Title>
                    <FontAwesomeIcon icon={faClose} onClick={()=>props.setDateTimeModal(false)}/>
                </TitleRow>
                <Hr/>
                <Field>
                    <Label>Select Date:</Label>
                    <TextField type="date" onChange={handleDateChange}/>
                </Field>
                <Field>
                    <Label>Select Time:</Label>
                    <TextField type="time" onChange={handleTimeChange}/>
                </Field>
                {
                    error && <Error>{error.error}</Error>
                }
                <Submit onClick={handleSubmit}>Save</Submit>
            </Container>
        </Overlay>
    )
}

export default DateTimeModal;