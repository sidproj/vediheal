import React, { useEffect, useState } from "react";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import "./BookingDetailsModal.css";
import MDBInput from 'mdb-react-ui-kit';
import { useHistory } from "react-router-dom";


function BookingDetailsModal(props) {

  console.log(props.details.benifits);
  const { resetBooking, details } = props;

  const [couponAvail,setCouponAvail] = useState(undefined);
  const [couponDis,setCouponDis] = useState(0);
  const [initialAmt,setInitialAmt] = useState(0);
  const [total,setTotal] = useState(undefined);
  
  const history = useHistory();

  useEffect(()=>{
      // if(!props.userJWT){
      //     history.push("/login");
      // }else{
        document.getElementById("s1").checked=true;
        handleAmtChange("amt1");
        setTotal(parseInt(initialAmt));
      // }
  },[]);

  
  useEffect(()=>{
    setTotal(parseInt(initialAmt)-parseInt(couponDis));
  },[initialAmt]);

  
  useEffect(()=>{
    setTotal(parseInt(initialAmt)-parseInt(couponDis));
  },[couponDis]);

  const handleAmtChange = (id)=>{
    setCouponAvail(undefined);
    const value = document.getElementById(id).innerText;
    console.log(value);
    setInitialAmt(value);
    handleCouponVerifyOnAmountChange(value);
  }

  const handleCouponVerifyOnAmountChange = async (amount)=>{
    try{
      const code = amount;
      const data = {
        "jwt":props.userJWT,
        "code":code,
        "minAmount":initialAmt
      }
      const url = "https://vediheal-backend.vercel.app/coupon/check";
      // const url = "http://localhost:5000/coupon/check";
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
      }
      const res = await fetch(url,options);
      const body = await res.json();
      console.log(body);
      if(body.status){
        setCouponDis(body.coupon.discount_amt);
      }
      else{setCouponDis(0);}
    }catch(error){
      setCouponDis(0);
    }
  }

  const verifyCoupon= async ()=>{
    try{
      const code = document.getElementById("coupon").value;
      const data = {
        "jwt":props.userJWT,
        "code":code,
        "minAmount":initialAmt
      }
      const url = "https://vediheal-backend.vercel.app/coupon/check";
      // const url = "http://localhost:5000/coupon/check";
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
      }
      const res = await fetch(url,options);
      const body = await res.json();
      console.log(body);
      setCouponAvail(body.status);
      if(body.status){
        setCouponAvail(body.status);
        setCouponDis(body.coupon.discount_amt);
      }
      else{setCouponDis(0);}
    }catch(error){
      setCouponDis(0);
    }
  }

  const [showBookingModal, setShowBookingModal] = useState(false);
  const onProceedClick = () => {
    setShowBookingModal(true);
  };
  const closeCheckoutModal = () => {
    setShowBookingModal(false);
  };
  return (
    <div className="modalContainer">
      <div className="Headercontainer">
        <div className="header">
          <div className="backButton" onClick={() => resetBooking()}>
            <img
              src={require("../../../assets/back.png")}
              height="24px"
              alt="header"
            />
          </div>
          <div>Book Your Reiki</div>
        </div>
        <div className="headerBody">
          <div>
            <img src={props.details.image} height="80px" alt="header" />
          </div>
          <div className="rightContainer">
            <div className="rightContainerHeader">{props.details.name}</div>
            <div className="rightContainerBody">
              {
                props.details.benifits.map((benifit)=>{
                  return (
                    <div className="benefit">
                      <img
                        src={require("../../../assets/tick.png")}
                        height="18px"
                        alt="header"
                      />
                      {benifit.name}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="sessions">
          <div className="sessionCard smallfont">
            <div>1 reiki session</div>
            <div className="priceContainer">
              ₹<span id="amt1">499</span>/ 1 session
              <input  type="radio" id="s1"
                className="radioButton"
                onClick={()=>handleAmtChange("amt1")}
                name="radio"/>
            </div>
          </div>
          <div className="sessionCard smallfont">
            <div>2 reiki session</div>
            <div className="priceContainer">
              ₹ <span id="amt2">1299</span>/ 3 session
              <input  type="radio" id="s2"
                className="radioButton"
                onClick={()=>handleAmtChange("amt2")}
                name="radio"/>
            </div>
          </div>
          <div className="sessionCard smallfont">
            <div>3 reiki session</div>
            <div className="priceContainer">
              ₹ <span id="amt3">1749</span>/ 5 session
              <input  type="radio" id="s3"
                className="radioButton"
                onClick={()=>handleAmtChange("amt3")}
                name="radio"/>
            </div>
          </div>
          <br/>
        <div>
          <input type="text" className="form-control active form-control-lg transparent-input __web-inspector-hide-shortcut__" 
            name="coupon" id="coupon" placeholder="Enter coupon code"/>
            {couponAvail==true?(<span className="link">Coupon code applied!</span>):<></>}
            {couponAvail==false?(<span className="link">Coupon code is not valid!</span>):<></>}
          <div className="bookingButton" onClick={() => verifyCoupon()}>
            Verify Coupon
          </div>
        </div>
        <div className="sessionCard smallfont">
            <div>Total Price: </div>
            <div className="priceContainer">
              {total||"0"}
            </div>
          </div>
      </div>
      <div className="bookingButton" onClick={() => onProceedClick()}>
        PROCEED
      </div>
      <div className="reikiBody">{props.details.description}</div>
      <div className="expect">What to expect</div>
      <div className="reikiBody">{props.details.expectations}</div>
      {showBookingModal && (
        <CheckoutModal
          onClose={() => closeCheckoutModal()} 
          details={details} 
          {...props}
          reiki={props.details}
          price={499}
          />
      )}
    </div>
  );
}

export default BookingDetailsModal;
