import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashBoardBody from "../../Components/DashBoardBody/DashBoardBody";
import Service from "../Service/Service";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";
import DemoCarousel from "./Carousel";
import { Collapse } from "react-collapse";
import ReivewCarousel from "./ReivewsCarousel";
import Services from "../../pages/Services";

const Dashboard = (props) => {
  const [knowMore, setKnowMore] = useState(false);

  const handleKnowMoreChange = () => {
    setKnowMore(!knowMore);
  };

  const history = useHistory();
  useEffect(() => {
    if (props.instructorJWT != undefined) {
      history.push("/login");
    }
  }, []);

  return (
    <div className="bg">
      <div className="container">
        <DemoCarousel />
        <div className="titleContainer">
          Modern problems with <span className="redText">Vedic</span> solutions
        </div>
        <div className="subtext">
          We are a vedic-healing ecosystem that brings together multiple healing
          options to create an experience that can help us in treating modern
          problems with ancient vedic solutions.
        </div>
        <div className="rounded-pill btn" onClick={handleKnowMoreChange}>
          Know more
        </div>

        <Collapse isOpened={knowMore}>
          <DashBoardBody />
        </Collapse>
      {/* <Service {...props}/>
       */}
       <Services {...props} footer={1}/>
      <ReivewCarousel/>
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
    </div>
  );
};

export default Dashboard;
