import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash";
import UserPastAppointmentDetailsModal from "./modals/UserPastAppointmentDetailsModal"
import UserUpcomingAppointmentDetailsModal from "./modals/UserUpcomingAppointmentDetailsModal"
import Footer from '../Components/Footer/Footer';
import Header from "../Components/Header/Header";
import "./UserPastAppointmentDetails.css";

const servicedCards = [
  {
    id: 1,
    label: `Anti-<span class="redText">Depression</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique to get rid of anxiety and depression through our body’s natural healing ability.",
    image: require("../assets/5.png"),
    bookingDetails: {
      image: require("../assets/5.png"),
      label: "Anti-depression Reiki",
      benefits: [
        "Boosts Mood",
        "Relives Anxiety",
        "Heals Depression",
        "No Side Effect",
        "Get Rid Of Therapies",
      ],
      sessionPlan: [
        {
          label: "1 Reki session",
          price: 499,
          sessionCount: 1,
        },
        {
          label: "3 Reki session",
          price: 1299,
          sessionCount: 3,
        },
        {
          label: "5 Reki session",
          price: 1749,
          sessionCount: 5,
        },
      ],
      body: "Depression is a very common situation and every 1 in 15 people experience it in the world. We are here to address this in the most result-effective and cost-effective way. Reiki is a science and research proven technique to get rid of anxiety and depression by our body’s natural healing ability.",
      expectation:
        "This 30 min reiki healing session will help you lighten your mood,and you can experience improvement in physical symptoms, wellbeing and anxiety. At VediHeal we believe depression is not a disease to be cured whereas it is a situation that needs to be healed.",
    },
  },
];  

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
      console.log("hehe",body);
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

    <div className="serviceContainerEnd mt-6">

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
              <div>Date :{card.time_slot?.start_time} </div>
              <div className='cardBtn'><UserUpcomingAppointmentDetailsModal appointment={card} /></div>



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
export default UserPastAppointmentDetails;
