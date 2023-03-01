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
import AppointmentSchedule from "./instructorModal copy";
import DateModal from "./dateModal";
import TimeModal from "./timeModal";

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

  const [selectedSchedule,setselectedSchedule] = useState([]);
  const [scheduleSelect,setScheduleSelect] = useState([]);

  const generateScheduleOptionData = (scheduleData)=>{
    const data = [];

    for(let i=0;i<scheduleData.length;i++){
      const newOption = {
        label :scheduleData[i].start_time,
        value :scheduleData[i]._id 
      }
      data.push(newOption);
    }
    console.log(data);
    setScheduleSelect(data);
  }

  const getScheduleData = async ()=>{
    console.log("Schedule info:- ");
    const data = {
      "jwt":props.userJWT,
      "instructor_id":"63c65f86be673562e4292736"
    }

    const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/schedule";
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(url,options);
    const body = await res.json();
    generateScheduleOptionData(body);
  }

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.userJWT,
      "reiki":"63c3e1398481e6965b972d42"
    }
    const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/reiki/instructorsByReiki";
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

  useEffect(()=>{
    getAppointmentData();
    getScheduleData();
  },[]);



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
              src={require("../../../assets/time.png")}
              height="40px"
              alt="header"
            />
            <div className="time">
              <AppointmentSchedule 
                changeInstructor={setselectedSchedule} 
                instructors={scheduleSelect}
                instructor={selectedInstructor} />
            </div>
          </div>

          <div className="bodyCard">
            <img
              src={require("../../../assets/user.png")}
              height="40px"
              alt="header"
            />
            <div className="time">
              <InstructorModal 
                changeInstructor={setSelectedInstructor} 
                instructors={instructors}
                instructor={selectedInstructor} />
            </div>
          </div>

          <div className="bodyCard">
            <img
              src={require("../../../assets/video.png")}
              height="40px"
              alt="header"
            />
            <div>Selected date: {selectedDate?.toString()}<br />Selected time: {selectedTime?.toLocaleTimeString()}</div>
          </div>
          
          {/* <div>
            <input type="checkbox"></input>{" "}
            <span className="smallfont">Schedule date and time later</span>
          </div> */}
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
