import React, { useState } from "react";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import "./BookingDetailsModal.css";

function BookingDetailsModal({ resetBooking, details }) {
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
                <input type="radio" className="radioButton" name={"radio"} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="bookingButton" onClick={() => onProceedClick()}>
        PROCEED
      </div>
      <div className="reikiBody">{body}</div>
      <div className="expect">What to expect</div>
      <div className="reikiBody">{expectation}</div>
      {showBookingModal && (
        <CheckoutModal onClose={() => closeCheckoutModal()} details={details} />
      )}
    </div>
  );
}

export default BookingDetailsModal;
