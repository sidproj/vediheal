import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './Login.css'
import ForgetPasswordEmailModal from "./modals/ForgetPasswordEmailModal"
import { useHistory } from "react-router-dom";
export default function SignUp() {

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
                        <Form.Control type="text" placeholder="Enter First Name" />
                      </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                      </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter Phone Number" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
      
                      <div className="d-grid">
                        <button className="btn btn-col" type="submit">
                          SignUp
                        </button>
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