import React from "react";
import "./DashBoardBody.css";
import _ from "lodash";
const benefits = [
  {
    id: 1,
    label: "SCIENCE PROVEN",
    subtext:
      "Reiki is a science proven japanese technique that helps in energy healing and is also an alternative to allopathic medicine.",
    image: require("../../assets/1.png"),
  },
  {
    id: 2,
    label: "NO SIDE-EFFECTS",
    subtext:
      "Reiki has not been found to have any adverse effects. Because there is nothing about a Reiki session that can interfere with conventional medical care. The touch of Reiki is very light on or even off the body.",
    image: require("../../assets/2.png"),
  },
  {
    id: 3,
    label: "COST EFFECTIVE",
    subtext:
      " Reiki address this in the most result-effective and cost-effective way.",
    image: require("../../assets/3.png"),
  },
  {
    id: 4,
    label: "SLEAMLESS CARE",
    subtext:
      "From self-relaxation to healing, to positive energy and no stress, we can help with it all.",
    image: require("../../assets/4.png"),
  },
];
function DashBoardBody() {
  return (
    <>
    
    <div className="bodyContainer">
      <div className="bodyTitle">WHY REKI OVER THERAPY?</div>
      <div className="bodySubtext">
        We offer various reiki solutions to modern day problems like Depression,
        Pain, Sleep disturbances, health crisis and many more.
      </div>
      <div>
        {_.map(benefits, (benefit, index) => {
          return (
            <div className="benefitContainer" key={index}>
              <img src={benefit.image} height="60px" alt="img" />
              <div className="benefitLabel">{benefit.label}</div>
              <div className="benefitSubtext">{benefit.subtext}</div>
            </div>
          );
        })}
      </div>
    </div>
   </> 
  );
}

export default DashBoardBody;
