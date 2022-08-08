import React from "react";
import "./Dashboard.css";
import DashBoardBody from "../../Components/DashBoardBody/DashBoardBody";
import Service from "../Service/Service";
import Feedback from "../../Components/Feedback/Feedback";
import Footer from "../../Components/Footer/Footer";

function Dashboard() {
  return (
    <div className="container">
      <img src={require("../../assets/banner.png")} width="100%" alt="img" />
      <div className="titleContainer">
        Modern problems with <span className="redText">Vedic</span> solutions
      </div>
      <div className="subtext">
        We are a vedic-healing ecosystem that brings together multiple healing
        options to create an experience that can help us in treating modern
        problems with ancient vedic solutions.
      </div>
      <div className="buttonClass">Know more</div>
      <DashBoardBody />
      <Service />
      <Feedback />
      <div className="connect">Connect with us</div>
      <div className="connectIcon">
        <img src={require("../../assets/insta.png")} height="20px" alt="img" />
        <img src={require("../../assets/fb.png")} height="20px" alt="img" />
        <img
          src={require("../../assets/youtube.png")}
          height="20px"
          alt="img"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
