import React, { useEffect, useState } from "react";
import "./CheckoutModal.css";
import InstructorModal from "./instructorModal";
import AppointmentSchedule from "./instructorModal copy";
import { useHistory } from "react-router-dom";
import SessionSelectionModal from "./SessionSelectionModal";
import SelectSessionModal from "./SelectSessionModal";
import AppointmentDateModal from "./AppointmentDateModal";
import TimeSlotModal from "./TimeSlotModal";
import DatePickerModal from "./DatePickerModal";
import TimeSlotPicker from "./TimeSlotPicker";
import DateModal from "./dateModal";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

const CheckoutModal = (props) => {
  const { onClose, details, reiki } = props;
  const history = useHistory();

  const [selectedInstructor, setSelectedInstructor] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const [selectedSchedule, setSelectedSchedule] = useState([]);
  const [scheduleSelect, setScheduleSelect] = useState([]);
  //map data for modal
  const [mapData, setMapData] = useState([]);

  const generateScheduleOptionData = (scheduleData) => {
    const data = [];

    for (let i = 0; i < scheduleData.length; i++) {
      const newOption = {
        label: scheduleData[i].start_time,
        value: scheduleData[i]._id,
      };
      data.push(newOption);
    }
    // console.log(data);
    setScheduleSelect(data);
    createDateTimeMap(data);
  };

  useEffect(() => {
    if (!props.userJWT) {
      history.push("/login");
    }
  }, []);



  const createDateTimeMap = (schedules) => {
    // console.log(schedules);
    const map = {};
    for (let i = 0; i < schedules.length; i++) {
      const temp = new Date(schedules[i].label);

      //convertion into dd/mm/yyyy formate
      const yyyy = temp.getFullYear();
      let mm = temp.getMonth() + 1; // Months start at 0!
      let dd = temp.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      //end convertion

      //convertion into hours and minutes
      let hours = temp.getHours();
      let minutes = temp.getMinutes();

      if(hours < 10) hours = '0' + hours;
      if(minutes < 10) minutes = '0' + minutes;

      //end convertion

      const date =  dd + '/' + mm + '/' + yyyy;

      const time = {
        id: schedules[i].value,
        time: `${hours}:${minutes}`,
      };
      if (map[date] == null || map[date] == null) {
        map[date] = [time];
      } else {
        map[date].push(time);
      }
    }
    setMapData(map);
  };

  const getScheduleData = async () => {
    // console.log("Schedule info:- ");
    const data = {
      jwt: props.userJWT,
      reiki: props.reiki._id,
    };

    // const url = "https://vediheal-backend.vercel.app/schedule";
    const url = "http://localhost:5000/schedule";
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, options);
    const body = await res.json();
    // console.log(body);
    generateScheduleOptionData(body);
  };

  const testRazorpay = async () => {
    // console.log("razorpay pending...");
  };

  const handleAppointment = async () => {
    // history.push("/pay");return;
    // console.log(selectedSchedule);
    const data = {
      // change this later
      jwt: props.userJWT,
      reiki: props.reiki._id,
      schedule_id: selectedSchedule,
      price: props.price,
    };
    
    console.log(data);
    return;

    const url = "https://vediheal-backend.vercel.app/appointment/set";
    // const url = "http://localhost:5000/appointment/set";
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, options);
    const body = await res.json();
    // console.log(body);
    if (body.status == "success") history.push("/");
  };
  //format
 const handleConfirmTime = (time) => {
  const selectedTime = new Date(time);
  const endTime = new Date(selectedTime.getTime() + 30 * 60000); // Adding 30 minutes (30 * 60000 milliseconds)

  setSelectedTime(selectedTime);
  setSelectedEndTime(endTime);
};

const formatTime = (time) => {
  if (typeof time === 'string') {
    const timeObj = new Date(`1970-01-01T${time}`);
    return timeObj.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  } else if (time instanceof Date) {
    return time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  }
  return '';
};

  useEffect(() => {
    getScheduleData();
  }, []);

  // console.log(props);

  const { image, label } = details;
  return (
    <>
    
    <div className="checkoutModalContainer">
    <Header />
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
            <img src={props.reiki.image} height="80px" alt="header" />
          </div>
          <div className="rightContainerHeader">{props.reiki.name}</div>
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
              <DateModal setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} setSelectedEndTime={setSelectedEndTime} />
              {/*<TimeSlotPicker dateTimeMap={mapData} setSelectedSchedule={setSelectedSchedule} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime}/>*/}
            </div>
          </div>

          {/* <div className="bodyCard">
            <img
              src={require("../../../assets/time.png")}
              height="40px"
              alt="header"
            />
            <div className="time">
              <TimeSlotPicker dateTimeMap={mapData} setSelectedSchedule={setSelectedSchedule} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime}/>
            </div>
          </div> */}


          {/* <div className="bodyCard">
            <img
              src={require("../../../assets/video.png")}
              height="40px"
              alt="header"
            />
            <div>
              Selected date:{selectedDate}
              <br />
              Selected time: {selectedTime}
            </div>
          </div> */}

          <div className="bodyCard">
            <img
              src={require("../../../assets/video.png")}
              height="40px"
              alt="header"
            />
            <div>
              Selected Date : {selectedDate}
              <br />
              Start Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedTime && formatTime(selectedTime)}
              {/* <br />
              End Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {selectedEndTime && formatTime(selectedEndTime)} */}
            </div>

          </div>

          <br></br>
          <div>Total amount to be paid:</div>
          <div className="price smallfont">
            <div>Price for the session/s</div>
            <div>₹{props.price}</div>
          </div>
          <div className="price">
            <div>Payable amount</div>
            <div>₹{props.price}</div>
          </div>
        </div>
        <div className="bookingButton" onClick={handleAppointment}>
          PAY NOW
        </div>
      </div>
      <div style={{"marginTop":"3em"}}>
      <Footer />
      </div>
      
    </div>
    </>
  );
};
export default CheckoutModal;
