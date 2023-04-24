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
    const history = useHistory();


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
      {
        props.footer!=0?(<><div className="serviceTitle">
                          Our <span className="redText">Services</span>
                        </div>
                        <div className="serviceTitle">
                          <button
                            type="button"
                            className="btn rounded-pill"
                            onClick={handleClick}
                          >
                            View All
                          </button>
                        </div></>):<></>
      }
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
