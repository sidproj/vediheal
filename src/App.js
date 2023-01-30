import React, { useState } from "react";
import Routing from "./Routing.js";
export default function App() {

  const [userJWT,setUserJWT] = useState();
  const [instructorJWT,setInstructorJWT] = useState();
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
