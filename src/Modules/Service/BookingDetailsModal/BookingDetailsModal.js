import React from "react";
import "./BookingDetailsModal.css";

function BookingDetailsModal({ resetBooking, details }) {
  const { image, label, benefits, sessionPlan, body, expectation } = details;
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
            <div className="sessionCard" key={i}>
              <div>{plan.label}</div>
              <div>
                ₹{plan.price}/
                {plan.sessionCount > 1
                  ? plan.sessionCount + " Sessions"
                  : "Session"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="reikiBody">{body}</div>
      <div className="expect">What to expect</div>
      <div className="reikiBody">{expectation}</div>
    </div>
  );
}

export default BookingDetailsModal;
