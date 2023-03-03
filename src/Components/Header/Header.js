import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarRight from '../Sidebar/SidebarRight.js'
import { useHistory } from "react-router-dom";


function Header(props) {
  const history = useHistory();
  function home() {
    history.push("/");
  }

  return (
    <div className="headerContainer">
      <a onClick={home}><img src={require("../../assets/logo.png")} height="45px" alt="img" /></a>

      <SidebarRight 
        setUserJWT={props.setUserJWT}
        setInstructorJWT={props.setInstructorJWT}
        userJWT={props.userJWT}
        instructorJWT={props.instructorJWT}
        isInstructor={true} 
        isLoggedIn={true}/> 
    </div>
  );
}

export default Header;
