import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash"; 
import UserUpcomingAppointmentDetailsModal from "./modals/UserUpcomingAppointmentDetailsModal"
import Footer from '../Components/Footer/Footer';

function UserPastAppointmentDetails(props) {

  
  const [appointments,setAppointments] = useState([]);

  const history = useHistory();
    useEffect(()=>{
        if(!props.userJWT){
            history.push("/login");
        }
    },[]);

    const getData = async ()=>{
      const data={
        "jwt":props.userJWT,
        "is_completed":true
      }
      const url = "https://vediheal-backend.vercel.app/appointment/user";
      // const url = "http://localhost:5000/appointment/user"
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
    }

    
    useEffect(()=>{
      getData();
    },[]);


    const style={
      marginBottom:"3rem"
    }

  return (
    <>
    <div className="serviceContainer mt-6">

    <div className="serviceCards" style={style}>
      {_.map(appointments, (card, index) => {
        return (
          <div
            className="reikiCard"
            key={index}
          >
          

          <div className="divRow">
            <div><img className="cardImage" src={require("../assets/5.png")} alt="img" /></div>
            <div className="divCol">
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.reiki_id.name }}></div>
              </div>
              <div>Instructor : {card.instructor_id.first_name} {card.instructor_id.last_name}</div>
              <div>Date :{card.start_time} </div>
              <div className='cardBtn'><UserUpcomingAppointmentDetailsModal appointment={card} /></div>
              {/* <div className="cardBtn"><img classname="img" src={require("../assets/next.png")} /></div> */}
            </div>
            
          </div>

          </div>
        );
      })}
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default UserPastAppointmentDetails;
