import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import watch from "../assets/images/time.png";
import { useNavigate } from "react-router";

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
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    background-color:#f8cfc1;
    border-radius:1.5rem;
    padding:0.5rem;
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
    font-size:0.9rem;
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

const PayNow = styled.div`
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

const ConfirmBooking = ()=>{

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    return(
        <>
            <Header/>
            <NavigateBack>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName>Checkout Appointment</CaptionName>
            </NavigateBack>

            <ReikiBanner>
                <Img src="https://res.cloudinary.com/dmrzngif8/image/upload/v1675284620/Vediheal/5_wjbzrb.png"/>
                <ReikiName>Anti Depression Reiki</ReikiName>
                <ReikiDuration>( 30-45 mins )</ReikiDuration>
            </ReikiBanner>

            <AppointmentForm>
                <TimeSelector>
                    <WatchIcon src={watch}/>
                    <div>Select Appointment Date</div>
                </TimeSelector>
                <TimeSelector>
                    <div>Selected Date: </div>
                </TimeSelector>
                <TimeSelector>
                    <div>Selected Time: </div>
                </TimeSelector>
                
                <PaymentContainer>
                    <PaymentTitle>Price Clasification: </PaymentTitle>
                    <PriceDetails>
                        <div>Price for session:</div> 
                        <div>₹ 499</div>
                    </PriceDetails>
                    <PriceDetails>
                        <div>Payable Amount:</div> 
                        <div>₹ 499</div>
                    </PriceDetails>
                </PaymentContainer>
                
            </AppointmentForm>

            <PayNow>Pay Now</PayNow>

            <Footer/>
        </>
    );
}

export default ConfirmBooking;