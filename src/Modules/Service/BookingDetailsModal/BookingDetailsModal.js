import React, { useEffect, useState } from "react";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import "./BookingDetailsModal.css";
import MDBInput from 'mdb-react-ui-kit';
import { useHistory } from "react-router-dom";


function BookingDetailsModal(props) {

  const { resetBooking, details } = props;
  
  const history = useHistory();
  useEffect(()=>{
    console.log(props);
      if(!props.userJWT){
          history.push("/login");
      }
  },[]);

  const verifyCoupon= async ()=>{
    const data = {
      "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzU1ZGZkZDJkN2RkYTk1NTlkNDIyMiIsImlhdCI6MTY3NjcyMjg2NX0.tVZ-yPx8uKPgNJRWgaw49yKuhGASuovKR34Zb2zCTmk",
      "code":"test"
    }
    const url = "http://localhost:5000/coupon/check";
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
  }

  const { image, label, benefits, sessionPlan, body, expectation } = details;
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
            <img src={image} height="80px" alt="header" />
          </div>
          <div className="rightContainer">
            <div className="rightContainerHeader">{label}</div>
            <div className="rightContainerBody">
              {benefits.map((benefit, index) => {
                return (
                  <div className="benefit" key={index}>
                    <img
                      src={require("../../../assets/tick.png")}
                      height="18px"
                      alt="header"
                    />
                    {benefit}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sessions">
        {sessionPlan.map((plan, i) => {
          return (
            <div className="sessionCard smallfont" key={i}>
              <div>{plan.label}</div>
              <div className="priceContainer">
                ₹{plan.price}/
                {plan.sessionCount > 1
                  ? plan.sessionCount + " Sessions"
                  : "Session"}
                 {
                  (i==0)? <input 
                            type="radio" 
                            className="radioButton" 
                            checked
                            name={"radio"} 
                          />:<input 
                            type="radio" 
                            className="radioButton" 
                            name={"radio"} />
                }
              </div>
            </div>
          );
        })}
        <div>
          <input type="text" name="coupon" id="coupon" />
          <div className="bookingButton" onClick={() => verifyCoupon()}>
            Verify Coupon
          </div>
        </div>
      </div>
      <div className="bookingButton" onClick={() => onProceedClick()}>
        PROCEED
      </div>
      <div className="reikiBody">{body}</div>
      <div className="expect">What to expect</div>
      <div className="reikiBody">{expectation}</div>
      {showBookingModal && (
        <CheckoutModal  reiki={100} onClose={() => closeCheckoutModal()} details={details} />
      )}
    </div>
  );
}

export default BookingDetailsModal;
