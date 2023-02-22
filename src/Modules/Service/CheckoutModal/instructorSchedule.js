import React, { useEffect, useState } from "react";
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
import InstructorModal from "./instructorModal"
import DateModal from "./dateModal";
import TimeModal from "./timeModal";
import { useHistory } from "react-router-dom";

const CheckoutModal = (props) => {

  function handleDate(e){
      setSelectedDate(new Date(e.target.value));
      console.log(e.target.value);
  }

  const { onClose, details ,reiki} = props;

  const [instructors,setInstructors] = useState([]);
  const [selectedInstructor,setSelectedInstructor] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const addSchedule = async ()=>{
    const data = {
      jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY1Zjg2YmU2NzM1NjJlNDI5MjczNiIsImlhdCI6MTY3NjcyOTIyM30.PDGBW1pmUyYZew7ybtw39KlEVh2YRGVFDXVSEiTN88I",
      instructor_id:"63c65f86be673562e4292736",
      start_time:"2023-03-19T11:00:55Z",
      end_time:"2023-03-19T12:00:55Z"
    }

    const url = "http://localhost:5000/schedule/createSchedule";
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      }
  }

    console.log(options);

    const res = await fetch(url,options);
    const body = await res.json();
    console.log(body);

  }

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.instructorJWT,
      "reiki":"63c3e1398481e6965b972d42"
    }
    const url = "http://localhost:5000/reiki/instructorsByReiki";
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
    const instructors=[];
    body.map(instructor=>{
      instructors.push({
        label:instructor.first_name+" "+instructor.last_name,
        value:instructor._id
      });
    });
    console.log(instructors);
    setInstructors(instructors);
  }

  useEffect(()=>{
    console.log(selectedInstructor);
  },[selectedInstructor]);

  // useEffect(()=>{
  //   getAppointmentData();
  // },[]);
  const history = useHistory();
  const back = ()=>{
    history.push("instructorupcomingappointmentdetails");
  }



  // const { image, label } = details;
  return (
    <div className="checkoutModalContainer">
      <div className="checkoutHeader">
        <img
          src={require("../../../assets/back.png")}
          height="24px"
          alt="header"
          onClick={back}
        />
      </div>
      <div className="checkoutBody">
        <div className="checkoutTitleContainer">
          <div>
            <img src={""} height="80px" alt="header" />
          </div>
          <div>
            <div>{"label"}</div>
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
                    {/* <div className="time"><div className="mt-2">Date&nbsp;&nbsp;</div><MDBInput className="mx-auto inputColor"  wrapperClass='w-100'  id='date' type='date' onChange={e => setSelectedDate(new Date(e.target.value))} responsive fluid/></div> */}
                    <DateModal 
                      changeDate={handleDate}
                      selectedDate={selectedDate}
                    />
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
                    <div className="time"><TimeModal /></div>
                    
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
            <div>Selected date: {selectedDate?.toString()}<br />Selected time: {selectedTime?.toLocaleTimeString()}</div>
          </div>
          
        </div>
        <div className="bookingButton" onClick={addSchedule}>Add to Schedule</div>
      </div>
    </div>
  );
};
export default CheckoutModal;
