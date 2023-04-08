import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash";
import "./Services.css"
import InstructorUpcomingAppointmentDetailsModal from "./modals/InstructorUpcomingAppointmentDetailsModal"
function InstructorUpcomingAppointmentDetails(props) {  

  const history = useHistory();
    useEffect(()=>{
      // console.log(props);
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);

  
  const [appointments,setAppointments] = useState([]);

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.instructorJWT,
      "is_completed":false
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
    // console.log(body);
    setAppointments(body);
  }

  useEffect(()=>{
    getAppointmentData();
  },[]);

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }

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
            <div>
              {
                card.reiki_id.image!=""?(<img className="cardImage" src={card.reiki_id.image} alt="img" />):<></>
              }
            </div>
            <div className="diCol">
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.reiki_id.name }}></div>
              </div>
            
              {/* <div>Order Id : {card._id} </div> */}
              <div>Client name : {card.user_id.first_name}</div>
              <div className='cardBtn'><InstructorUpcomingAppointmentDetailsModal data={card} instructorJWT={props.instructorJWT} /></div>
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
export default InstructorUpcomingAppointmentDetails;
