import React from "react";
import "./CheckoutModal.css";

const CheckoutModal = ({ onClose, details }) => {
  console.log(details);
  const { image, label } = details;
  return (
    <div className="checkoutModalContainer">
      <div className="checkoutHeader">
        <img
          src={require("../../../assets/back.png")}
          height="24px"
          alt="header"
          onClick={onClose}
        />
      </div>
      <div className="checkoutBody">
        <div className="checkoutTitleContainer">
          <div>
            <img src={image} height="80px" alt="header" />
          </div>
          <div>
            <div>{label}</div>
            <div>{"30-45 mins"}</div>
          </div>
        </div>
        <div className="checkoutBodyContainer">
          <div className="bodyCard">
            <img
              src={require("../../../assets/calendar.png")}
              height="40px"
              alt="header"
            />
            <div>Choose your date</div>
          </div>
          <div className="bodyCard">
            <img
              src={require("../../../assets/time.png")}
              height="40px"
              alt="header"
            />
            <div>Choose your time</div>
          </div>
          <div className="bodyCard">
            <img
              src={require("../../../assets/video.png")}
              height="40px"
              alt="header"
            />
            <div>Please select date and time</div>
          </div>
          <div>
            <input type="checkbox"></input>{" "}
            <span className="smallfont">Schedule date and time later</span>
          </div>
          <br></br>
          <div>Total amount to be paid:</div>
          <div className="price smallfont">
            <div>Price for 1 session</div>
            <div>₹499</div>
          </div>
          <div className="price">
            <div>Payable amount</div>
            <div>₹499</div>
          </div>
          <div className="coupon">
            <input
              type="text"
              placeholder={"Apply coupon"}
              className={"inputText"}
            />
            <img
              src={require("../../../assets/back.png")}
              height="20px"
              alt="header"
              className="applyCoupon"
            />
          </div>
        </div>
        <div className="bookingButton">CONFIRM BOOKING</div>
      </div>
    </div>
  );
};
export default CheckoutModal;
