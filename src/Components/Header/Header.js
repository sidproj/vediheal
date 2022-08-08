import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="headerContainer">
      <img src={require("../../assets/logo.png")} height="45px" alt="img" />

      <div className="menuContainer">
        <FontAwesomeIcon icon={faBars} height="20px" />
      </div>
    </div>
  );
}

export default Header;
