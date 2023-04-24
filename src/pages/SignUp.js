  import { Col, Container, Card, Form } from "react-bootstrap";
import './Login.css';
import "./SignUp.css"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { propTypes } from "react-bootstrap/esm/Image";


function SignUp(props) {

  const history = useHistory();

  const [errors,setErrors] = useState({});

  const handelRegister = async ()=>{
    const errors={};
    const data = {
      "first_name":document.getElementById("fname").value,
      "last_name":document.getElementById("lname").value,
      "email":document.getElementById("email").value,
      "phone_no":document.getElementById("phone").value,
      "password":document.getElementById("password").value,
      "confirm_password":document.getElementById("conf_password").value
    }

    if(data.first_name.length == 0){
      errors["first_name"]="Please enter first name!";
    }
    if(data.last_name.length == 0){
      errors["last_name"]="Please enter last name!";
    }
    if(data.email.length == 0){
      errors["email"]="Please enter email";
    }
    if(data.phone_no.length == 0){
      errors["phone"]="Please enter phone number!";
    }
    if(data.password.length == 0){
      errors["password"]="Please enter password!";
    }
    if(data.confirm_password.length == 0){
      errors["confirm"]="Please cofirm the password!";
    }
    if(data.confirm_password != data.password){
      errors["confirm_password"]="Passwords do not match!";
    }
    // console.log(Object.keys(errors).length);
    if(Object.keys(errors).length != 0 ){
      setErrors(errors);
      return;
    }

    const url="https://vediheal-backend.vercel.app/register/user";
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(url,options);
    const body = await res.json();
    // console.log(body);
    const successful="Registration Successful";
    
    if(body.message && body.message==successful){
      props.setUserJWT(body.jwt);
      history.push("/");
    }
    else{
      errors["backend"]=body.errors;
      setErrors(errors);
    }
  }

  function handleClick() {
    history.push("/login");
  }

  function privacypolicy(){
    history.push("/privacypolicy");
  }

  const errorStyle={
    marginTop:"-1.5rem",
    marginBottom:"1rem",
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
              <span className="link" style={errorStyle}>{errors.first_name}</span>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Last Name*' id='lname' type='text' size="lg"/>
              <span className="link" style={errorStyle}>{errors.last_name}</span>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Email address*' id='email' type='email' size="lg"/>
              <span className="link" style={errorStyle}>{errors.email}</span>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Password*' id='password' type='password' size="lg"/>
              <span className="link" style={errorStyle}>{errors.password}</span>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Confirm Password*' id='conf_password' type='password' size="lg"/>
              <span className="link" style={errorStyle}>{errors.confirm}</span>
              <span className="link">{errors.confirm_password}</span>
              <MDBInput className="transparent-input" wrapperClass='mb-4 w-100' placeholder='Phone Number*' id='phone' type='phone' size="lg"/>
              <span className="link" style={errorStyle}>{errors.phone}</span>
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="privacyCheck" />
                <label class="form-check-label" for="flexCheckDisabled">I agree with VediHeal's 
                  <span className="link">
                    <a onClick={() => {privacypolicy();}}>Terms and Conditions</a>
                  </span> and <span className="link">
                  <a onClick={() => {privacypolicy();}}>Privacy Policy</a></span>
                </label>
              </div>
              {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" id="instructorCheck" />
                <label class="form-check-label">Are You an Instructor?</label>
              </div> */}
              
              {
                errors.backend !=null ?(<><br /><br/><br/></>):<></>
              }
              <span className="link" style={errorStyle}>{errors.backend?.confirm_password}</span>
              <span className="link" style={errorStyle}>{errors.backend?.email}</span>
              <span className="link" style={errorStyle}>{errors.backend?.first_name}</span>
              <span className="link" style={errorStyle}>{errors.backend?.last_name}</span>
              <span className="link" style={errorStyle}>{errors.backend?.password}</span>
              <span className="link" style={errorStyle}>{errors.backend?.phone_no}</span>
              {
                errors.backend !=null ?(<><br/><br/></>):<></>
              }
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