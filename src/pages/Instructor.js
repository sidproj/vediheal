import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import './Instructor.css'

function Instructor() {

  const history = useHistory();
    function handleClick() {
    history.push("/instructorprofileview");
  }


  return (
    <div className='mx-6 mt-8'>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col md={4}>
          <Card>
            
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button onClick={handleClick} class="btn btn-col" type="button">
                  View Profile
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div> 
  );
}

export default Instructor;