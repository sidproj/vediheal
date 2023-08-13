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
import PayNow from "./stirpe/paynow";

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

  useEffect(() => {
    if (!props.userJWT) {
      history.push("/login");
    }
    console.log(props);
  }, []);

  // payment gateway modal
  const [displayGateway,setDisplayGateway] = useState(false);
  const [data,setData] = useState(null);
  

  const handleAppointment = async () => {
    // history.push("/pay");return;
    // console.log(selectedSchedule);
    const date = new Date(selectedDate);
    const hour =selectedTime.split(":")[0]-0;
    const minutes = selectedTime.split(":")[1]-0;
    date.setHours(hour);
    date.setMinutes(minutes);
    const data = {
      // change this later
      jwt: props.userJWT,
      reiki: props.reiki._id,
      schedule_id: selectedSchedule,
      start_time:date,
      price: props.price,
    };
    setData(data);
    console.log(data);

    setDisplayGateway(true);
    // return;
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

  // useEffect(() => {
  //   getScheduleData();
  // }, []);

  // console.log(props);

  const { image, label } = details;
  return (
    <>   
    <div className="checkoutModalContainer" style={{zIndex:1}}>    
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
      <div style={{"marginTop":"4em"}}>
      <Footer />
      </div>
      
    </div>
     
    {
      displayGateway && <PayNow setDisplayGateway={setDisplayGateway} data={data} price={props.price} userJWT={props.userJWT}/>
    }
    </>
  );
};
export default CheckoutModal;
