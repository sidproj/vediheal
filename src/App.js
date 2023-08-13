import React, { useEffect, useState } from "react";
import Routing from "./Routing.js";
export default function App() {

  const [userJWT, setUserJWT] = useState(null);
  const [instructorJWT, setInstructorJWT] = useState();

  useEffect(()=>{
    if(userJWT){
      localStorage.setItem("jwt",userJWT);
    }
  },[userJWT]);

  useEffect(()=>{
    const jwt = localStorage.getItem("jwt");

    if(jwt && jwt != undefined){
      setUserJWT(jwt);
    }
  },[]);

  return (
    <div>
      <Routing
        userJWT={userJWT}
        setUserJWT={setUserJWT}
        instructorJWT={instructorJWT}
        setInstructorJWT={setInstructorJWT}
      />
    </div>
  );
}
