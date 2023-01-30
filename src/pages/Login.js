import React from 'react';
import "./Login.css"
import { useHistory } from "react-router-dom";
import ForgetPasswordEmailModal from "./modals/ForgetPasswordEmailModal"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

  const handelLogin = async ()=>{
    const data = {
      "email":document.getElementById("email").value,
      "password":document.getElementById("password").value
    }
    let url;
    if(document.getElementById("isInstructor").checked){
      url="http://localhost:5000/login/instructor";
    }else{
      url="http://localhost:5000/login/user";
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(url,options);
    const body = await res.json();
    console.log(body);
  }

  const history = useHistory();
    function handleClick() {
    history.push("/signup");
  }



  return (
    <MDBContainer fluid className="form">

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Log in</h2>
              <p className="fw-bold text-center mb-3">Don't have an account?<span className="link"><a onClick={handleClick}> Sign up</a></span></p>
              

              

              
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address*' id='email' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Password*' id='password' type='password' size="lg"/>
              

              <p className="fw-bold text-left mb-3 forgot-password"><ForgetPasswordEmailModal /></p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="privacyCheck" />
                <label class="form-check-label" for="flexCheckDisabled">I agree with VediHeal's <span className="link"><a>Terms and Conditions</a></span> and <span className="link"><a>Privacy Policy</a></span></label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="instructorCheck" />
                <label class="form-check-label">Are You an Instructor?</label>
              </div>
              <br />
              <MDBBtn size='lg'>
                Login
              </MDBBtn>
              <br />
              


              

            </MDBCardBody>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;