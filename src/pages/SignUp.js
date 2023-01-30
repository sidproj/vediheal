  import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './Login.css'
import ForgetPasswordEmailModal from "./modals/ForgetPasswordEmailModal"
import { useHistory } from "react-router-dom";
export default function SignUp() {

  const handelSignUp = async ()=>{
    const data={
      "first_name":document.getElementById("fname").value,
      "last_name":document.getElementById("lname").value,
      "email":document.getElementById("email").value,
      "phone_no":document.getElementById("phone").value,
      "password":document.getElementById("password").value,
      "confirm_password":document.getElementById("conf_password").value
    }

    let url;
    if(document.getElementById("isInstructor").checked){
      url="http://localhost:5000/register/instructor";
    }else{
      url="http://localhost:5000/register/user";
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
    history.push("/login");
  }


  return (
    <div className="mt-8">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="btn-col" ></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3">
                  <p className=" mb-5">Please enter your details to SignUp!</p>
                  <div className="mb-3">
                    <Form>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control type="text" id="fname" placeholder="Enter First Name" />
                      </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control type="text" id="lname" placeholder="Enter Last Name" />
                      </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="tel" id="phone" placeholder="Enter Phone Number" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="password" placeholder="Password" />
                      </Form.Group>
      
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="conf_password" placeholder="Confirm Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox">
                        <div class="form-check">
                          <input class="form-check-input" id="isInstructor" type="checkbox" defaultValue="" />
                          <label class="form-check-label" for="flexCheckDefault">
                            Are you an Instructor?
                          </label>
                        </div>
                      </Form.Group>

                      <div className="d-grid">
                        <div className="btn btn-col" onClick={handelSignUp}>
                          SignUp
                        </div>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already an account?{" "}
                        <a onClick={handleClick} className="text-primary fw-bold">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}