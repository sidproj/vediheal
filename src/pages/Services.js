// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useHistory } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import './Instructor.css'
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookingDetailsModal from "../Modules/Service/BookingDetailsModal/BookingDetailsModal";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Services.css";
import Footer from "../Components/Footer/Footer";

function Services(props) {
  // const [reikies,setReikies] = useState([]);

  // const getReikiesData = async ()=>{
  //   const url = "http://localhost:5000/reiki";
  //   const options = {
  //     method: 'GET',
  //   }
  //   const result = await fetch(url,options);
  //   const body = await  result.json();
  //   setReikies(body);
  // }

  // useEffect(()=>{
  //   getReikiesData();
  // },[]);

  // const history = useHistory();

  // const getData = async (id)=>{
  //   const data = {reiki:id};
  //   const res = await fetch("http://localhost:5000/reiki/instructorsByReiki", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const body = await res.json();
  //   return body;
  // }

  // async function handleClick(id) {

  //   const detail=await getData(id);
  //   history.push({
  //     pathname:"/instructor",
  //     state:{detail}
  //   });
  // }

  const history = useHistory();
  // useEffect(()=>{
  //   console.log("hiiya");
  //   console.log(props);
  //     if(!props.userJWT){
  //         history.push("/login");
  //     }
  // },[]);

  function handleClick() {
    history.push("/services");
  }

  useEffect(() => {
    async function getData() {
      const reikis = await fetch("https://vediheal-backend.vercel.app/reiki");
      const body = await reikis.json();
      setReikiData(body);
      // console.log(body);
    }
    getData();
  }, []);

  const [reikiData, setReikiData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const showBookingDetails = ({ card }) => {
    setSelectedCard(card);
    // console.log(card);
    setShowModal(true);
  };
  const resetBookingDetails = () => {
    setSelectedCard({});
    setShowModal(false);
  };

  return (   
  <div>
    <div className="serviceContainer mt-6">
      <div className="serviceCards">
        {_.map(reikiData, (card, index) => {
          return (
            <div
              className="reikiCard"
              onClick={() => showBookingDetails({ card })}
              key={index}
            >
              <div className="divRow">
                {card.image != "" ? (
                  <div>
                    <img className="cardImage" src={card.image} alt="img" />
                  </div>
                ) : (
                  <div>
                    <img
                      className="cardImage"
                      src={require("../assets/5.png")}
                    />
                  </div>
                )}
                <div className="divCol">
                  <div className="cardText">
                    <div dangerouslySetInnerHTML={{ __html: card.name }}></div>
                  </div>
                  <div className="cardSubtext">{card.description}</div>
                  {/* <div className="cardSubtext">{card.description.replace(/(\r\n|\n|\r)/gm, "").substring(0,70)}...</div> */}
                  <div className="cardBtn">
                    <FontAwesomeIcon
                      onClick={() => showBookingDetails({ card })}
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && (
        <BookingDetailsModal
          resetBooking={resetBookingDetails}
          details={selectedCard}
          {...props}
        />
      )}
    </div>
      {
        props.footer==0?<Footer/>:<></>
      }
    </div>
  );
}

export default Services;
