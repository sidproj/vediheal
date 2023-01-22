import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './Login.css'
import { useHistory } from "react-router-dom";
import ForgetPasswordEmailModal from "./modals/ForgetPasswordEmailModal"
export default function Login() {

  const history = useHistory();
    function handleClick() {
    history.push("/signup");
  }

  return (

    

    <div className="mt-8">
      <Container>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="btn-col" ></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3">
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
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
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              Are you an Instructor?
                            </label>
                      </div>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <ForgetPasswordEmailModal />
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <button className="btn btn-col" type="submit">
                          Login
                        </button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a onClick={handleClick} className="text-primary fw-bold">
                          Sign Up
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