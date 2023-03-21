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

  const handleTime = (event) => {
  const [hours, minutes] = event.target.value.split(':');
  setSelectedTime(new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    parseInt(hours),
    parseInt(minutes)
  ));
}


  const { onClose, details ,reiki} = props;

  const [instructors,setInstructors] = useState([]);
  const [selectedInstructor,setSelectedInstructor] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const addSchedule = async ()=>{
    const date = selectedDate;
    date.setTime(selectedTime);
    console.log(date);
    const endDate = date;
    const data = {
      jwt:props.instructorJWT,
      start_time:date,
      end_time:endDate
    }

    const url = "https://vediheal-backend.vercel.app/schedule/createSchedule";
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
        
      </div>
      <div className="checkoutBody">
        <div className="checkoutTitleContainer bodyCard">
          <div>
            <img src={require("../../../assets/back.png")}
          height="24px"
          alt="header"
          onClick={back} />
          </div>
          <div>
            <div  style={ {textAlign: "center"}}>{"Add New Schedule"}</div>
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
                    <div className="time"><TimeModal 
                        changeTime={handleTime}
                      selectedTime={selectedTime}
                    /></div>
                    
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
            

            <div>
  Selected date: {selectedDate.getDate() + '/' + (selectedDate.getMonth() + 1) + '/' + selectedDate.getFullYear()}<br />
  Selected time: {
    selectedTime instanceof Date && !isNaN(selectedTime.getTime()) ? (
      selectedTime.getHours() + ':' + selectedTime.getMinutes() + ' to ' +
      new Date(selectedTime.getFullYear(), selectedTime.getMonth(), selectedTime.getDate(), selectedTime.getHours(), selectedTime.getMinutes() + 30).getHours() + ':' +
      new Date(selectedTime.getFullYear(), selectedTime.getMonth(), selectedTime.getDate(), selectedTime.getHours(), selectedTime.getMinutes() + 30).getMinutes()
    ) : (
      'Invalid date'
    )
  }
</div>

          </div>
          
        </div>
        <div className="bookingButton" onClick={addSchedule}>Add to Schedule</div>
      </div>
    </div>
  );
};
export default CheckoutModal;

