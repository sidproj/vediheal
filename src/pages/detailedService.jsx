import { styled } from "styled-components";
import Footer from "../components/footer"
import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import tickIcon from "../assets/images/tick.png";
import { useNavigate } from "react-router";

const BookReikiContainer = styled.div`
    text-align:center;
    background-color:#ff4d4d;
    padding:1rem;
    display:flex;
    flex-direction:column;
    row-gap:1rem;
    align-items:center;
    justify-content:center;
`

const BookReikiTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
    margin: 0 2rem;
`

const ReikiDetailsContainer = styled.div`
    background-color:#f1f6eb;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:2rem;
    border-radius:0.5rem;
` 

const ReikiImg = styled.img`
    height:5rem;
`

const ReikiBenefitContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const ReikiName = styled.div`
    font-weight:600;
    font-size:1.2rem;
    margin-bottom:1rem;
`
const Benefit = styled.div`
    font-size:0.95rem;
    display:flex;
    flex-direction:row;
    column-gap:0.5rem;
    align-items:center;
    justify-content:center;
    height:1.7rem;
`

const TickIcon = styled.img`
    height:1rem;
    object-fit:contain;
`

const SessionContainer = styled.div`
    display:felx;
    flex-direction:column;
    margin:1rem;
`

const SingleSession = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    border-bottom: 1px solid black;
    padding: 12px;
    cursor: pointer;
`

const SessionInfo = styled.div`
    font-size:1rem;
`

const RadioInput = styled.input`
  accent-color: black;
  margin-left: 10px;
`

const CouponContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border-bottom: 1px solid black;
    margin:1rem;
    padding-right:1rem;
`


const CouponInput = styled.input`
    border: none;
    border-radius: 0;
    font-size:1.2rem;
    margin-left:0.5rem;
    margin-bottom:0.5rem;
    background-color:inherit;
`

const PriceContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:0.5rem 1rem;
`

const PriceText = styled.div`
    font-size:1.2rem;
    font-weight:600;
    margin-bottom:1rem;
`

const ConfirmBookingBtn = styled.div`
    background-color:#ff4d4d;
    color:black;
    font-size:1.2em;
    font-weight:300;
    border:none;
    border-radius:1.75em;
    width:fit-content;
    padding:0.75rem 1.5rem;
    align-self:center;
    margin-bottom:1.5rem;
`

const DetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    row-gap:1rem;
    margin-bottom:2rem;
`

const DetailTitle = styled.div`
    font-size:1.2rem;
    font-weight:600;
    align-self:flex-start;
    margin-left:1rem;
`

const DetailDescription = styled.div`
    font-size:1rem;
    align-self:flex-start;
    margin-left:1rem;
`

const DetailedService = (props) => {

    // fetch api call for specific reiki details
    // pending 

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    const handleConfirmBooking = ()=>{
        navigate("/confirmbooking");
    }

    return (
        <>
            <Header/>

            {/* information about reikie */}
            <BookReikiContainer>
                <BookReikiTitle>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                    <div>Book Your Reiki</div>
                </BookReikiTitle>
                <ReikiDetailsContainer>
                    <ReikiImg src="https://res.cloudinary.com/dmrzngif8/image/upload/v1675284620/Vediheal/5_wjbzrb.png"/>
                    <ReikiBenefitContainer>
                        <ReikiName> Anti Depression Reiki</ReikiName>
                        <Benefit>
                            <TickIcon src={tickIcon}/>
                            <p>Science Proven</p>
                        </Benefit>
                        <Benefit>
                            <TickIcon src={tickIcon}/>
                            <p>Science Proven</p>
                        </Benefit>
                        <Benefit>
                            <TickIcon src={tickIcon}/>
                            <p>Science Proven</p>
                        </Benefit>
                        <Benefit>
                            <TickIcon src={tickIcon}/>
                            <p>Science Proven</p>
                        </Benefit>
                        <Benefit>
                            <TickIcon src={tickIcon}/>
                            <p>Science Proven</p>
                        </Benefit>
                        <Benefit>
                            <TickIcon src={tickIcon}/>
                            <p>Science Proven</p>
                        </Benefit>
                    </ReikiBenefitContainer>
                </ReikiDetailsContainer>
            </BookReikiContainer>
            
            {/* session for user to select */}
            <SessionContainer>
                <SingleSession>
                    <SessionInfo>1 Reiki Session - ₹ 499</SessionInfo>
                    <RadioInput type="radio" name="session"/>
                </SingleSession>
                <SingleSession>
                    <SessionInfo>2 Reiki Session - ₹ 1299</SessionInfo>
                    <RadioInput type="radio" name="session"/>
                </SingleSession>
                <SingleSession>
                    <SessionInfo>1 Reiki Session - ₹ 1749</SessionInfo>
                    <RadioInput type="radio" name="session"/>
                </SingleSession>
            </SessionContainer>

            <CouponContainer>
                <CouponInput placeholder="Apply Coupon"/>
                <div>
                <FontAwesomeIcon icon={faCircleChevronRight}/>
                </div>
            </CouponContainer>

            <PriceContainer>
                <PriceText>Payable Amount: </PriceText>
                <PriceText>₹ 499</PriceText>
            </PriceContainer>

            <ConfirmBookingBtn onClick={handleConfirmBooking}>Confirm Booking</ConfirmBookingBtn>
            
            <DetailsContainer>
                <DetailTitle>Description</DetailTitle>
                <DetailDescription>
                    Reiki is a scientific and research-proven technique to get rid of anxiety & depression through our body’s natural healing ability.
                </DetailDescription>
                
                <DetailTitle>What to expect</DetailTitle>
                <DetailDescription>
                    Reiki is a scientific and research-proven technique to get rid of anxiety & depression through our body’s natural healing ability.
                </DetailDescription>
            </DetailsContainer>

            <Footer/>
        </>
    );
}

export default DetailedService;