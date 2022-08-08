import _ from "lodash";
import React from "react";
import "./Service.css";

const servicedCards = [
  {
    id: 1,
    label: `Anti-<span class="redText">Depression</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique to get rid of anxiety and depression through our body’s natural healing ability.",
    image: require("../../assets/5.png"),
  },
  {
    id: 2,
    label: `Pain <span class="redText">Relief </span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique that helps decrease pain perception by healing the emotional aspect of pain.",
    image: require("../../assets/6.png"),
  },
  {
    id: 3,
    label: `Reiki for <span class="redText">Addiction</span> and <span class="redText">detoxification.</span>`,
    subtext:
      " Reiki helps a person to shift their energy in a positive direction and no longer want to use or abuse any illicit substances.",
    image: require("../../assets/7.png"),
  },
  {
    id: 4,
    label: `Sleep <span class="redText">Disturbance</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique that helps in solving the problems like Insomnia or Narcolepsy.",
    image: require("../../assets/8.png"),
  },
  {
    id: 5,
    label: `Health <span class="redText">Crisis </span> Reiki`,
    subtext:
      "Support the well-being of people receiving traditional medical treatments such as chemotherapy, radiation, surgery, and kidney dialysis.",
    image: require("../../assets/9.png"),
  },
];

function Service() {
  return (
    <div className="serviceContainer">
      <div className="serviceTitle">
        Our <span className="redText">Services</span>
      </div>
      <div className="serviceCards">
        {_.map(servicedCards, (card) => {
          return (
            <div className="card">
              <div>
                <img src={card.image} height="100px" />
              </div>
              <div className="cardText">
                <div dangerouslySetInnerHTML={{ __html: card.label }}></div>
                <div className="cardSubtext">{card.subtext}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
