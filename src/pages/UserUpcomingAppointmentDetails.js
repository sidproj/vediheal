import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash";

import UserUpcomingAppointmentDetailsModal from "./modals/UserUpcomingAppointmentDetailsModal"
function UserUpcomingAppointmentDetails(props) {

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

  const history = useHistory();
    useEffect(()=>{
      console.log(props);
        if(!props.userJWT){
            history.push("/login");
        }
    },[]);

  
  const [appointments,setAppointments] = useState([]);

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.userJWT,
      "is_appointed":false
    }
    const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/appointment/user";
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
      {_.map(servicedCards, (card, index) => {
        return (
          <div
            className="reikiCard"
            key={index}
          >
          

          <div className="divRow">
            <div><img className="cardImage" src={card.image} alt="img" /></div>
            <div className="diCol">
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.label }}></div>
              </div>
            
              <div>Order Id : </div>
              <div>Date : </div>
              <div className='cardBtn'>< UserUpcomingAppointmentDetailsModal /></div>
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
export default UserUpcomingAppointmentDetails;
