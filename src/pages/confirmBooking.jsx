import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import watch from "../assets/images/time.png";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import DateTimeModal from "../components/dateTimeModal";
import PayNow from "./payNow";
import { useRecoilState } from "recoil";
import { userAtom } from "../Recoil/user";
import { Link } from "react-router-dom";

const NavigateBack = styled.div`
    margin:1.5rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-bottom:0;
`

const ReikiBanner = styled.div`
    margin:1rem;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    background-color:#f8cfc1;
    border-radius:1.5rem;
    padding:0.5rem;
    padding-bottom:0.5rem;
`

const Img = styled.img`
    height:4.5rem;
    object-fit:contain;
`

const ReikiName = styled.div`
    font-size:0.9rem;
    font-weight:600;
`

const ReikiDuration = styled.div`
    font-size:0.8rem;
`

const AppointmentForm = styled.div`
    margin:0.5rem 1rem;
    padding:0.5rem;
    background-color: #f6f1eb;
    border-radius:0.5rem;
    row-gap:0.75rem;
    display:flex;
    flex-direction:column;
`

const TimeSelector = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#f8cfc1;
    border-radius:0.5rem;
    padding:0.7rem;
    column-gap:1rem;
    min-height:2.5rem;
`

const WatchIcon = styled.img`
    height:2.5rem;
    object-fit:contain;
`

const PaymentContainer = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:0.5rem;
    margin:0.5rem;
`

const PaymentTitle = styled.div`
    font-size:1.2rem;
    font-weight:500;
`

const PriceDetails = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

const PayBtn = styled.div`
    background-color:#ff4d4d;
    color:black;
    font-size:1.2em;
    font-weight:500;
    border:none;
    border-radius:1.75em;
    width:fit-content;
    padding:0.75rem 1.5rem;
    align-self:center;
    margin-bottom:3rem;
    margin-top:3rem;
`

const CaptionName = styled.div`
    font-size:1.2rem;
    font-weight:500;
    align-self:center;
`
const TimeDetails = styled.div`
    margin:0.25rem 0.5rem;
    font-size:1rem;
    font-weight:500;
`

const Error = styled.div`
    color:#ff4d4d;
    align-self:center;
    margin-top:1rem;
`

const Message = styled.div`
    color:#3bbb10;
    align-self:center;
    margin-top:1rem;
    font-weight:500;
    margin-bottom:3rem;
    margin-top:-2rem;
`

const ConfirmBooking = ()=>{

    const navigate = useNavigate();
    const location = useLocation();
    const reiki =location.state;

    const [user,setUser] = useRecoilState(userAtom);

    const [dateTimeModal,setDateTimeModal] = useState(false);
    const [displayGateway,setDisplayGateway] = useState(false);
    const [error,setError] = useState(null);
    const [message,setMessage] = useState(null);

    const [bookingData,setBookingData] = useState(null);
    const [dateTime,setDateTime]= useState(null);
    const ref = useRef();
    ref.dateTime = dateTime;
    
    const goback = ()=>{
        navigate(-1);
    }

    const getDate = (date)=>{
        if(date==null) return false;
        return (date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear());
    }
    
    const getTime = (date)=>{
        if(date==null) return false;
        let hour = date.getHours()+"";
        let min = date.getMinutes()+"";
        if( hour.length == 1) hour = "0"+hour;
        if(min.length == 1) min = "0"+min;
        return (hour+" : "+min);
    }

    const handlePayBtn = ()=>{
        setError(null);
        if(!dateTime){
            setError({error:"Please selected date and time!"});
            return;
        }
        setDisplayGateway(true);
    }

    useEffect(()=>{
        if(!user) {
            navigate("/login");
            return;
        }
        if(!location.state){
            navigate("/");
            return;
        }
    },[]);

    useEffect(()=>{
        setBookingData({
            jwt:user.jwt,
            reiki:reiki._id,
            start_time:ref.dateTime,
            price:reiki?.finalAmt,     
        });
    },[dateTime]);

    return(
        <>
            {
                dateTimeModal && <DateTimeModal setDateTimeModal={setDateTimeModal} setDateTime={setDateTime}/>
            }
            <Header/>
            <NavigateBack>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName>Checkout Appointment</CaptionName>
            </NavigateBack>

            <ReikiBanner>
                <Img src={reiki?.image}/>
                <ReikiName>{reiki?.name}</ReikiName>
                <ReikiDuration>( 30-45 mins )</ReikiDuration>
            </ReikiBanner>

            <AppointmentForm>
                <TimeSelector onClick={()=>setDateTimeModal(true)}>
                    <WatchIcon src={watch}/>
                    <div>Select Appointment Date</div>
                </TimeSelector>
                <PriceDetails>
                    <TimeDetails>Selected Date:</TimeDetails> 
                    <TimeDetails>{getDate(dateTime) || "No Selected"}</TimeDetails>
                </PriceDetails>
                <PriceDetails>
                    <TimeDetails>Selected Time:</TimeDetails> 
                    <TimeDetails>{getTime(dateTime) || "No Selected"}</TimeDetails>
                </PriceDetails>
                
                <PaymentContainer>
                    <PaymentTitle>Price Clasification: </PaymentTitle>
                    <PriceDetails>
                        <div>Price for session:</div> 
                        <div>₹ {reiki?.initial}</div>
                    </PriceDetails>
                    <PriceDetails>
                        <div>Coupon discount:</div> 
                        <div>₹ {reiki?.discount}</div>
                    </PriceDetails>
                    <PriceDetails>
                        <div>Payable Amount:</div> 
                        <div>₹ {reiki?.finalAmt}</div>
                    </PriceDetails>
                </PaymentContainer>
                
            </AppointmentForm>

            {
                error && <Error>{error.error}</Error>
            }
            
            { message ?<PayBtn onClick={()=>navigate("/appointment/upcoming")}>Check Appointments</PayBtn> :<PayBtn onClick={handlePayBtn}>Pay Now</PayBtn> }

            {
                message && <Message>{message}</Message>
            }


            {
                displayGateway && 
                <PayNow
                    setDisplayGateway={setDisplayGateway}  
                    setMessage={setMessage}
                    data={bookingData}
                />
            }
            <Footer/>
        </>
    );
}

export default ConfirmBooking;