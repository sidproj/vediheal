import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Instructor.css'

function Instructor(props) {


  const history = useHistory();
    useEffect(()=>{
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);
  
  const [instructors,setInstructors] = useState([]);

  const getInstructorData = async ()=>{

    if(props.location.state){
      setInstructors(props.location.state.detail);
      return;
    }

    const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/reiki/instructor";
    const options = {
      method: 'GET', 
    }
    
    const result = await fetch(url,options);
    const body = await  result.json();
    console.log(body);
    setInstructors(body);
  }
  
  useEffect(()=>{
    getInstructorData();
  },[]);


  function handleClick(id) {
  history.push({
    pathname:"/instructorprofileview",
    state: {detail: id }
  });
}


  return (
    <div className='mx-6 mt-8'>
    <Row xs={1} md={2} className="g-4">
      {instructors.map(instructor => (
        <Col md={4}>
          <Card>
            
            <Card.Body>
              <Card.Title>{instructor.first_name} &nbsp; {instructor.last_name}</Card.Title>
              <Card.Text>{instructor.description}
              </Card.Text>
              <button onClick={()=>handleClick("63c65f86be673562e4292736")} class="btn btn-col" type="button">
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