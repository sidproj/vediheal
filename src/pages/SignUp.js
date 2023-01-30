import React from 'react';
import "./SignUp.css"
import { useHistory } from "react-router-dom";
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




function SignUp() {

  

  const history = useHistory();
    function handleClick() {
    history.push("/login");
  }

  
  return (
    <MDBContainer fluid className="form">

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
              <p className="fw-bold text-center mb-3">Already have a VediHeal account?<span className="link"><a onClick={handleClick}> Log in</a></span></p>
              <div className="text-center">
                <button class="btn fbutton"><a href="#" class="fa fa-facebook"> </a>   </button>
                &nbsp;
                &nbsp;
                <button class="btn gbutton"><a href="#" class="fa fa-google"> </a> </button>
              </div><br />

              <h3 className="fw-bold mb-2 text-center">OR</h3>

              <MDBInput wrapperClass='mb-4 w-100' placeholder='First Name*' id='fname' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Last Name*' id='lname' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address*' id='email' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Password*' id='password' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Phone Number*' id='phone' type='phone' size="lg"/>

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

export default SignUp;