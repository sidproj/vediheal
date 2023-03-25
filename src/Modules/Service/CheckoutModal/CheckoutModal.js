import React, { useEffect, useState } from "react";
import "./CheckoutModal.css";
import InstructorModal from "./instructorModal"
import AppointmentSchedule from "./instructorModal copy";
import { useHistory } from "react-router-dom";
import SessionSelectionModal from "./SessionSelectionModal"
import SelectSessionModal from "./SelectSessionModal"
import AppointmentDateModal from "./AppointmentDateModal"
import TimeSlotModal from './TimeSlotModal';
import DatePickerModal from './DatePickerModal'
import TimeSlotPicker from './TimeSlotPicker'

const CheckoutModal = (props) => {

  

  const { onClose, details ,reiki} = props;
  const history = useHistory();

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

  useEffect(()=>{
      if(!props.userJWT){
          history.push("/login");
      }
  },[])

  const getScheduleData = async ()=>{
    console.log("Schedule info:- ");
    const data = {
      "jwt":props.userJWT,
      "reiki":props.reiki._id
    }

    const url = "https://vediheal-backend.vercel.app/schedule";
    // const url = "http://localhost:5000/schedule";
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
    console.log("reiki:",props.reiki);
    generateScheduleOptionData(body);
  }

  const handleAppointment = async ()=>{
    console.log(selectedSchedule);
    const data = {
      // change this later
      "jwt":props.userJWT,
      "reiki":props.reiki._id,
      "schedule_id":selectedSchedule.value,
      "price":props.price
    }
    const url = "https://vediheal-backend.vercel.app/appointment/set";
    // const url = "http://localhost:5000/appointment/set";
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
    if(body.status == "success") history.push("/");
  }

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.userJWT,
      "reiki":"63c3e1398481e6965b972d42"
    }
    const url = "https://vediheal-backend.vercel.app/reiki/instructorsByReiki";
    // const url = "http://localhost:5000/reiki/instructorsByReiki";
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
              src={require("../../../assets/time.png")}
              height="40px"
              alt="header"
            />
            <div className="time">

            <TimeSlotPicker />
            
              {/*
              <AppointmentSchedule 
                changeInstructor={setselectedSchedule} 
                instructors={scheduleSelect}
                instructor={selectedInstructor} /> 
              */}
      
             {/* <SelectSessionModal /> */}
             {/* *<AppointmentDateModal /> */}
            </div>
          </div>
{/* 
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
          </div> */}

          <div className="bodyCard">
            <img
              src={require("../../../assets/video.png")}
              height="40px"
              alt="header"
            />
            <div>Selected date: {selectedDate.getDate() + '/' + (selectedDate.getMonth() + 1) + '/' + selectedDate.getFullYear()}<br />Selected time: {selectedTime?.toLocaleTimeString()}</div>
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
        <div className="bookingButton" onClick={handleAppointment}>PAY NOW</div>
      </div>
    </div>
  );
};
export default CheckoutModal;
