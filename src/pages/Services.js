import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Instructor.css'
function Services() {

  
  const [reikies,setReikies] = useState([]);

  const getReikiesData = async ()=>{
    const url = "http://localhost:5000/reiki";
    const options = {
      method: 'GET', 
    }
    const result = await fetch(url,options);
    const body = await  result.json();
    setReikies(body);
  }

  useEffect(()=>{
    getReikiesData();
  },[]);


  const history = useHistory();

  const getData = async (id)=>{
    const data = {reiki:id};
    const res = await fetch("http://localhost:5000/reiki/instructorsByReiki", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    return body;
  }

  async function handleClick(id) {

    const detail=await getData(id);
    history.push({
      pathname:"/instructor",
      state:{detail}
    });
  }

  return (
    <div className="mx-6 mt-8">
    <Row xs={1} md={2} className="g-4">
      {reikies.map((reiki) => (
        <Col md={4}>
          <Card>
            {
              (reiki.image!="")?<Card.Img variant="top" src={reiki.image} height="100px" width="40px"/>:<></>
            }
            <Card.Body>
              <Card.Title>{reiki.name}</Card.Title>
              <Card.Text>
                {reiki.description}
              </Card.Text>
              <button onClick={()=>handleClick(reiki._id)} class="btn btn-col" type="button">
                  Book Appointment for This Service
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
    </div>
  );
}

export default Services;