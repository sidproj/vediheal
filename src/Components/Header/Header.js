import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarRight from '../Sidebar/SidebarRight.js'


function Header() {
  return (
    <div className="headerContainer">
      <a href="/"><img src={require("../../assets/logo.png")} height="45px" alt="img" /></a>

      <SidebarRight isInstructor={true} isLoggedIn={true}/> 
    </div>
  );
}

export default Header;
