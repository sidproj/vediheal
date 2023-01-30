import React, { useState } from "react";
import "./CheckoutModal.css";
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const CheckoutModal = ({ onClose, details }) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  


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
            <MDBContainer fluid>
              <MDBRow>
                <MDBCol>
                  <div className="time" >
                    <div className="time"><div className="mt-2">Date&nbsp;&nbsp;</div><MDBInput className="mx-auto inputColor"  wrapperClass='w-100'  id='date' type='date' onChange={e => setSelectedDate(new Date(e.target.value))} responsive fluid/></div>
                    
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>  
            
          </div>
          <div className="bodyCard">
            <img
              src={require("../../../assets/time.png")}
              height="40px"
              alt="header"
            />
            <MDBContainer fluid>
              <MDBRow>
                <MDBCol>
                  <div className="time" >
                    <div className="time">Start Time&nbsp;&nbsp;<MDBInput className="mx-auto inputColor" wrapperClass='w-100'  id='startTime' type='time' onChange={e => setSelectedTime(new Date("1970-01-01 " + e.target.value))} responsive fluid/></div>
                    
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>  

          </div>
          <div className="bodyCard">
            <img
              src={require("../../../assets/video.png")}
              height="40px"
              alt="header"
            />
            <div>Selected date: {selectedDate.toString()}<br />Selected time: {selectedTime.toLocaleTimeString()}</div>
          </div>
          <div className="bodyCard">
            <img
              src={require("../../../assets/user.png")}
              height="40px"
              alt="header"
            />
            <div className="time">
            <Form className="mt-2 mx-2">
                  <fieldset>
              
                    <Form.Group className="mb-3 time ">
                      <Form.Label classNamehtmlFor="SelectInstructor ">Preferred &nbsp;&nbsp;<br />Instructor</Form.Label>
                      <Select options="Instructor 1" placeholder="Instructor" className="mx-auto" styles={{
                                                      control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        backgroundColor: '#F6F1EB',
                                                      }),
                                                    }} />
                    </Form.Group>
                  </fieldset>
            </Form>        
              </div>
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
          
        </div>
        <div className="bookingButton">PAY NOW</div>
      </div>
    </div>
  );
};
export default CheckoutModal;
