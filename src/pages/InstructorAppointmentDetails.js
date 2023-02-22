import { useEffect ,useState} from 'react'
import Card from 'react-bootstrap/Card';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap';

function InstructorAppointmentDetails(props) {

  const history = useHistory();
    useEffect(()=>{
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);


  const getData = async ()=>{
    const data={
      "jwt":props.instructorJWT,
      "is_completed":false
    }
    const url = "http://localhost:5000/appointment/instructor";
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

  useEffect(()=>{
    getData();
  },[]);

      const rowData = [
          { 
            startTime : "Mark", 
            endTime : "wood",
            clientName : "root", 
            service : "massage", 
            price : "koko"
          },
          { 
            startTime : "Mark", 
            endTime : "wood",
            clientName : "root", 
            service : "massage", 
            price : "koko"
          },
          { 
            startTime : "Mark", 
            endTime : "wood",
            clientName : "root", 
            service : "massage", 
            price : "koko"
          },
        ]

      

  return (

    <> 
    
    <div className='mx-6 mt-8' >

      <Card>
          <Card.Title style={{ textAlign : 'center', marginTop : '15' }} >Your Appointments</Card.Title>
        <Card.Body>

     <MDBTable responsive={true}>
      <MDBTableHead light>
        <tr>
          <th scope='col'>Start Time</th>
          <th scope='col'>End Time</th>
          <th scope='col'>Client Name</th>
          <th scope='col'>Servise</th>
          <th scope='col'>Price</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {rowData.map((item, index) =>(
          <tr>
          <th scope='row'>{item.startTime}</th>
          <td>{item.endTime}</td>
          <td>{item.clientName}</td>
          <td>{item.service}</td>
          <td>{item.price}</td>
          
        </tr>

        ))}
      </MDBTableBody>
    </MDBTable>
        </Card.Body>
        
      </Card>
    </div>
    </>
  )
}
export default InstructorAppointmentDetails;
