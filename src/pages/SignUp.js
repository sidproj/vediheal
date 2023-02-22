  import { Col, Container, Card, Form } from "react-bootstrap";
import './Login.css';
import "./SignUp.css"
import { useHistory } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { propTypes } from "react-bootstrap/esm/Image";


function SignUp(props) {

  const history = useHistory();

  const handelRegister = async ()=>{
    const data = {
      "first_name":document.getElementById("fname").value,
      "last_name":document.getElementById("lname").value,
      "email":document.getElementById("email").value,
      "phone_no":document.getElementById("phone").value,
      "password":document.getElementById("password").value,
      "confirm_password":document.getElementById("conf_password").value
    }
    let url;
    let con;
    if(document.getElementById("instructorCheck").checked){
      url="http://localhost:5000/register/instructor";
      con=true;
    }else{
      url="http://localhost:5000/register/user";
      con=false;
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
    const successful="Registration Successful";
    
    if(body.message && body.message==successful){
      if(con){
        props.setInstructorJWT(body.jwt);
        history.push("/instructorprofile");
      }
      else{
        props.setUserJWT(body.jwt);
        history.push("/");
      }
    }
  }

  function handleClick() {
    history.push("/login");
  }

  
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100 btn-col'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column form'>

              <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
              <p className="fw-bold text-center mb-3">Already have a VediHeal account?<span className="link"><a onClick={handleClick}> Log in</a></span></p>
              
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='First Name*' id='fname' type='text' size="lg"/>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Last Name*' id='lname' type='text' size="lg"/>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Email address*' id='email' type='email' size="lg"/>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Password*' id='password' type='password' size="lg"/>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Confirm Password*' id='conf_password' type='password' size="lg"/>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Phone Number*' id='phone' type='phone' size="lg"/>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="privacyCheck" />
                <label class="form-check-label" for="flexCheckDisabled">I agree with VediHeal's <span className="link"><a>Terms and Conditions</a></span> and <span className="link"><a>Privacy Policy</a></span></label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="instructorCheck" />
                <label class="form-check-label">Are You an Instructor?</label>
              </div>
              <br />
              <MDBBtn size='lg' className="login-btn" onClick={handelRegister}>
                Sign Up
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