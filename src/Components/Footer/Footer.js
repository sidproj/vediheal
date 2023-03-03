import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

function Footer() {
  
  const history = useHistory();
  function aboutus(){
    history.push("/aboutus");
  }
  function services() {
    history.push("/services");
  }

  function privacypolicy(){
    history.push("/privacypolicy");
  }

  return (
    <div className="footerContainer">
      <div className="footerTitle">Quick links</div>
      <div className="footerLinks">
        <div onClick={aboutus}>About us</div>
        <div onClick={services}>Services</div>
        <div>Careers</div>
        <div>Contact us</div>
        <div onClick={privacypolicy}>Privacy Policy</div>
        <div>Terms and conditions</div>
      </div>
    </div>
  );
}

export default Footer;
