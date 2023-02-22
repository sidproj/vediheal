import React, { useEffect, useState } from "react";
import Routing from "./Routing.js";
export default function App() {

  const [userJWT,setUserJWT] = useState();
  const [instructorJWT,setInstructorJWT] = useState();

  useEffect(()=>{
    console.log(userJWT);
  },[userJWT]);

  
  useEffect(()=>{
    console.log(instructorJWT);
  },[instructorJWT]);

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
