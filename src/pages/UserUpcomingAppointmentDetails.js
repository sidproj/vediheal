import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash";

import UserUpcomingAppointmentDetailsModal from "./modals/UserUpcomingAppointmentDetailsModal"
import Footer from '../Components/Footer/Footer';
function UserUpcomingAppointmentDetails(props) {

  const history = useHistory();
    useEffect(()=>{
      // console.log(props);
        if(!props.userJWT){
            history.push("/login");
        }
    },[]);


    function services() {
      history.push("/services");
    }

  
  const [appointments,setAppointments] = useState([]);

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.userJWT,
      "is_appointed":false
    }
    const url = "https://vediheal-backend.vercel.app/appointment/user";
    // const url = "http://localhost:5000/appointment/user";
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
  
  const style={
    marginBottom:"3rem"
  }

  return (<>
    <div className="serviceContainerEnd mt-6">
    <button className="rounded-pill btn" onClick={() => {services()}}>
                 Book Your Appointment
            </button>

    <div className="serviceCards" style={style}>
      {_.map(appointments, (card, index) => {
        return (
          <div
            className="reikiCard"
            key={index}
          >
          

          <div className="divRow">
            <div><img className="cardImage" src={require("../assets/5.png")} alt="img" /></div>
            <div className="diCol">
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.reiki_id.name }}></div>
              </div>
              <div>Date :{card.time_slot?.start_time} </div>
              <div className='cardBtn'>< UserUpcomingAppointmentDetailsModal appointment={card}/></div>
              {/* <div className="cardBtn"><img classname="img" src={require("../assets/next.png")} /></div> */}
            </div>
            
            
          </div>


          </div>
        );
      })}

    </div>
    <div className="FooterBottom">   
        <Footer/>
      </div>
    </div>
       
      </>
  )
}
export default UserUpcomingAppointmentDetails;