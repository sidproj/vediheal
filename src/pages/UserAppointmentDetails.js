import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
function UserAppointmentDetails(props) {

  const history = useHistory();
    useEffect(()=>{
      console.log(props);
        if(!props.userJWT){
            history.push("/login");
        }
    },[]);

  
  const [appointments,setAppointments] = useState([]);

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      "jwt":props.userJWT,
      "is_appointed":true
    }
    const url = "http://localhost:5000/appointment/user";
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
    setAppointments(body);
  }

  useEffect(()=>{
    getAppointmentData();
  },[]);

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }

  return (
    <div className='mx-6 mt-8'>
      <Card className="card">
          <Card.Title style={{ textAlign : 'center', marginTop : '15' }}>Your Appointments</Card.Title>
        <Card.Body>
      <MDBTable responsive={true}>
        <MDBTableHead>
          <tr>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Service</th>
            <th scope="col">Instructor</th>
            <th scope="col">Price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          {
            appointments?.map((appointment,i)=>{
              const start = new Date(appointment.start_time);
              const end = new Date(appointment.end_time);
              return(
                <tr>
                  <td scope="row">{start.getFullYear() +"/"+(start.getMonth()+1)+"/"+start.getDate()+" "+start.getHours()+":"+start.getMinutes()+":"+ start.getSeconds()}</td>
                  <td>{start.getFullYear() +"/"+(end.getMonth()+1)+"/"+end.getDate()+" "+end.getHours()+":"+end.getMinutes()+":"+ end.getSeconds()}</td>
                  <td>{appointment.reiki_id?.name}</td>
                  <td>{appointment.instructor_id?.first_name} {appointment.instructor_id?.last_name}</td>
                  <td>{appointment.price}</td>
                </tr>
              )
            })
          }
        </MDBTableBody>
      </MDBTable>
    </Card.Body>
  </Card>
</div>
  )
}
export default UserAppointmentDetails;
