import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash";
import InstructorUpcomingAppointmentDetailsModal from "./modals/InstructorUpcomingAppointmentDetailsModal"
import { useState } from 'react';
import "./Services.css"

function InstructorPastAppointmentDetails(props) {

  const [appointments,setAppointments] = useState([]);

  const history = useHistory();
    useEffect(()=>{
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);

    const getData = async ()=>{
      const data={
        "jwt":props.instructorJWT,
        "is_completed":true
      }
      const url = "https://vediheal-backend.vercel.app/appointment/instructor";
      const options = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          }
      }
      const res = await fetch(url,options);
      const body = await res.json();
      setAppointments(body);
      // console.log(body);
    }

    useEffect(()=>{
      getData();
    },[]);


  return (
    <div className="serviceContainer mt-6">

    <div className="serviceCards">
      {_.map(appointments, (card, index) => {
        return (
          <div
            className="card"
            key={index}
          >
          

          <div className="divRow">
            <div><img className="cardImage" src={card.reiki_id.image} alt="img" /></div>
            <div className="divCol">
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.reiki_id.name }}></div>
              </div> 
            
              {/* <div>Order Id : {card._id} </div> */}
              <div>Client name:  {card.user_id.firt_name}</div>
              <div className='cardBtn'><InstructorUpcomingAppointmentDetailsModal data={card} /></div>
              {/* <div className="cardBtn"><img classname="img" src={require("../assets/next.png")} /></div> */}
            </div>
            
          </div>

          </div>
        );
      })}
    </div>
    </div>
  )
}
export default InstructorPastAppointmentDetails;
