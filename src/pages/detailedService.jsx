import { styled } from "styled-components";
import Footer from "../components/footer"
import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import tickIcon from "../assets/images/tick.png";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { userAtom } from "../Recoil/user";
import { useEffect, useState } from "react";
import config from "../config.json";

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
    column-gap:1rem;
    width:100%;
    margin: 0 2rem;
    font-weight:500;
    /* color:white; */
`

const ReikiDetailsContainer = styled.div`
    background-color:#f1f6eb;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:1rem;
    border-radius:0.5rem;
` 

const ReikiImg = styled.img`
    height:5.5rem;
    width:6rem;
`

const ReikiBenefitContainer = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:0.5rem;
`

const ReikiName = styled.div`
    font-weight:600;
    font-size:1.2rem;
    margin-bottom:1rem;
    text-align:left;
`
const Benefit = styled.div`
    font-size:0.95rem;
    display:flex;
    flex-direction:row;
    column-gap:0.5rem;
    align-items:center;
    justify-content:flex-start;
    height:1.7rem;
    margin-left:1.5rem;
    text-align:left;
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
    &:focus{
        outline: 0 none;
    }
`

const PriceContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:0.5rem 1rem;
`

const PriceText = styled.div`
    font-size:1rem;
    font-weight:600;
`

const ConfirmBookingBtn = styled.div`
    background-color:#ff4d4d;
    color:white;
    font-size:1.2em;
    font-weight:500;
    border:none;
    border-radius:1.75em;
    width:fit-content;
    padding:0.75rem 1.5rem;
    align-self:center;
    margin-bottom:2rem;
    margin-top:1.5rem;

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
    margin-right:1rem;
`

const Error = styled.div`
    color:#ff4d4d;
    align-self:center;
`



const DetailedService = (props) => {

    // fetch api call for specific reiki details
    // pending 

    const navigate = useNavigate();

    const location = useLocation();
    const {reiki} = location?.state;

    const [user,setUser] = useRecoilState(userAtom);
    const [sessionPrice,setSessionPrice] = useState(499);
    const [sessionCount,setSessionCount] = useState(1);
    const [couponCode,setCouponCode] = useState(null);
    const [discountAmt,setDiscountAmt] = useState(0);
    const [error,setError] = useState(null);

    const goback = ()=>{
        navigate(-1);
    }

    const checkCoupon = async ()=>{
        const url = config.SERVER_URL+"/coupon/check";
        const options = {
            method: "POST",
            body: JSON.stringify({
                minAmount:sessionPrice-0,
                code:couponCode,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }

        const response = await fetch(url,options);
        const data = await response.json();
        if(data.status == false){
            setError({error:data.message});
        }else{
            setError({error:"Coupon Applied!"});
            setDiscountAmt(data.coupon.discount_amt);
        }
    }

    const handleConfirmBooking = ()=>{
        if(!user) navigate("/login");
        else navigate("/confirmbooking",{state:{...reiki,
            initial:sessionPrice,
            discount:discountAmt,
            finalAmt:sessionPrice-discountAmt,  
            sessionCount:sessionCount
        }});
    }

    const handleSesisonChange = (data,count)=>{
        setSessionPrice(data);
        setSessionCount(count);
        setDiscountAmt(0);
        setError(null);
    }

    useEffect(()=>{
        if(!location.state) navigate("/services");
        document.getElementById("root")?.scroll(0,0);
    },[]);

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
                    <ReikiImg src={reiki?.image}/>
                    <ReikiBenefitContainer>
                        <ReikiName>{reiki?.name}</ReikiName>
                        {
                            reiki?.benifits?.map((benefit,index)=>{
                                if(benefit.is_deleted == false)
                                return (
                                    <Benefit key={index} >
                                        <TickIcon src={tickIcon}/>
                                        <p>{benefit.name}</p>
                                    </Benefit>
                                );
                            })
                        }
                    </ReikiBenefitContainer>
                </ReikiDetailsContainer>
            </BookReikiContainer>
            
            {/* session for user to select */}
            <SessionContainer>
                <SingleSession>
                    <SessionInfo>1 Reiki Session - ₹ 499</SessionInfo>
                    <RadioInput 
                        type="radio" 
                        value={499} 
                        name="session" 
                        checked = {sessionPrice === 499}
                        onChange = {(e)=>{handleSesisonChange(e.target.value-0,1)}}
                    />
                </SingleSession>
                <SingleSession>
                    <SessionInfo>2 Reiki Session - ₹ 1299</SessionInfo>
                    <RadioInput 
                        type="radio" 
                        value={1299}
                        name="session" 
                        checked = {sessionPrice === 1299}
                        onChange = {(e)=>{handleSesisonChange(e.target.value-0,2)}}
                    />
                </SingleSession>
                <SingleSession>
                    <SessionInfo>3 Reiki Session - ₹ 1749</SessionInfo>
                    <RadioInput 
                        type="radio" 
                        value={1749} 
                        name="session" 
                        checked = {sessionPrice === 1749}
                        onChange = {(e)=>{handleSesisonChange(e.target.value-0,3)}}
                    />
                </SingleSession>
            </SessionContainer>

            <CouponContainer>
                <CouponInput placeholder="Apply Coupon" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>
                <div>
                <FontAwesomeIcon icon={faCircleChevronRight} onClick={checkCoupon}/>
                </div>
            </CouponContainer>

            {
                error && <Error>{error.error}</Error>
            }

            <PriceContainer>
                <PriceText>Initial Amount: </PriceText>
                <PriceText>₹ {sessionPrice}</PriceText>
            </PriceContainer>
            <PriceContainer>
                <PriceText>Discount: </PriceText>
                <PriceText>₹ {discountAmt}</PriceText>
            </PriceContainer>
            <PriceContainer>
                <PriceText>Payable Amount: </PriceText>
                <PriceText>₹ {sessionPrice - discountAmt}</PriceText>
            </PriceContainer>

            <ConfirmBookingBtn onClick={handleConfirmBooking}>Confirm Booking</ConfirmBookingBtn>
            
            <DetailsContainer>
                <DetailTitle>Description</DetailTitle>
                <DetailDescription>
                    {reiki?.description}
                </DetailDescription>
                
                <DetailTitle>What to expect</DetailTitle>
                <DetailDescription>
                    {reiki?.expectations}
                </DetailDescription>
            </DetailsContainer>

            <Footer/>
        </>
    );
}

export default DetailedService;