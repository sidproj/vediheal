import _ from "lodash";
import React, { useEffect, useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal/BookingDetailsModal";
import "./Service.css";

const servicedCards = [
  {
    id: 1,
    label: `Anti-<span class="redText">Depression</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique to get rid of anxiety and depression through our body’s natural healing ability.",
    image: require("../../assets/5.png"),
    bookingDetails: {
      image: require("../../assets/5.png"),
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
  {
    id: 2,
    label: `Pain <span class="redText">Relief </span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique that helps decrease pain perception by healing the emotional aspect of pain.",
    image: require("../../assets/6.png"),
    bookingDetails: {
      image: require("../../assets/6.png"),
      label: "Pain relief",
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
  {
    id: 3,
    label: `Reiki for <span class="redText">Addiction</span> and <span class="redText">detoxification.</span>`,
    subtext:
      " Reiki helps a person to shift their energy in a positive direction and no longer want to use or abuse any illicit substances.",
    image: require("../../assets/7.png"),
    bookingDetails: {
      image: require("../../assets/6.png"),
      label: "Reiki for addiction and detoxification",
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
  {
    id: 4,
    label: `Sleep <span class="redText">Disturbance</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique that helps in solving the problems like Insomnia or Narcolepsy.",
    image: require("../../assets/8.png"),
    bookingDetails: {
      image: require("../../assets/8.png"),
      label: "Sleep disturbance reiki",
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
  {
    id: 5,
    label: `Health <span class="redText">Crisis </span> Reiki`,
    subtext:
      "Support the well-being of people receiving traditional medical treatments such as chemotherapy, radiation, surgery, and kidney dialysis.",
    image: require("../../assets/9.png"),
    bookingDetails: {
      image: require("../../assets/9.png"),
      label: "Health Crisis Reiki",
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

function Service() {

  useEffect(()=>{
    async function getData(){
      const reikis = await fetch("http://localhost:5000/reiki");
      const body = await reikis.json();
      setReikiData(body);
    }
    getData();
  },[]);

  const [reikiData,setReikiData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const showBookingDetails = ({ card }) => {
    setSelectedCard(card.bookingDetails);
    setShowModal(true);
  };
  const resetBookingDetails = () => {
    setSelectedCard({});
    setShowModal(false);
  };
  return (
    <div className="serviceContainer">
      <div className="serviceTitle">
        Our <span className="redText">Services</span>
      </div>
      <div className="serviceCards">
        {_.map(servicedCards, (card, index) => {
          return (
            <div
              className="card"
              onClick={() => showBookingDetails({ card })}
              key={index}
            >
              <div>
                <img src={card.image} height="100px" alt="img" />
              </div>
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.label }}></div>
                <div className="cardSubtext">{card.subtext}</div>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && (
        <BookingDetailsModal
          resetBooking={resetBookingDetails}
          details={selectedCard}
        />
      )}
    </div>
  );
}

export default Service;
