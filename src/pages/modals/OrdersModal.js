import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../UserProfile.css'
function OrdersModal(props) {
  
  const [appointments,setAppointments] = useState([]);

  const getAppointmentData = async ()=>{
    const data = {
      // change this later
      jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzU1ZGZkZDJkN2RkYTk1NTlkNDIyMiIsImlhdCI6MTY3NDQyMTI1Mn0.Gl2sqvPjunPYkVtiq6NbmMYLqZDYKdfrn8QZfCkuWTg",

    }
    const url = "https://vediheal-backend-hq8luoz5h-sidproj.vercel.app/aapointment/user";
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
    <>
      <button onClick={initModal} class="btn btn-col" type="button">
        Orders
      </button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Your Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Service</th>
      <th scope="col">Instructor</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
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
            <td>{appointment.reiki_id.name}</td>
            <td>{appointment.instructor_id.first_name} {appointment.instructor_id.last_name}</td>
            <td>{appointment.price}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
         </Modal.Footer>
      </Modal>
    </>
  )
}
export default OrdersModal;
