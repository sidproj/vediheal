import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import _ from "lodash";
import { useState } from 'react';
import "./Services.css"
import "./ViewSchedule.css"
import { Modal, Button } from 'react-bootstrap';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ViewSchedule(props) {

  const [schedules,setSchedules] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async (id) => {
    const data={
      "jwt":props.instructorJWT,
      "id":id
    }
    const url = "https://vediheal-backend.vercel.app/schedule/deleteSchedule";
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
    if(body.status){
      history.push("/viewschedule");
    }
  }

  const history = useHistory();
    useEffect(()=>{
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);

    const getData = async ()=>{
      const data={
        "jwt":props.instructorJWT,
      }
      const url = "https://vediheal-backend.vercel.app/schedule/instructor";
      const options = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          }
      }
      const res = await fetch(url,options);
      const body = await res.json();
      setSchedules(body);
      // console.log(body);
    }

    useEffect(()=>{
      getData();
    },[]);

    const getDate = (data)=>{
      const date = new Date(data);
      const formated= " "+date.toLocaleDateString();
      return formated;
    }
  
    const getTime = (data)=>{
      const date = new Date(data);
      let formated=" ";
      if((""+date.getHours()).length == 1) formated+= ("0"+date.getHours()+":");
      else formated+=date.getHours()+":";
      
      if((""+date.getMinutes()).length == 1) {
        formated += ("0"+date.getMinutes());
      }
      else formated+=date.getMinutes();
      return formated;
    }

  return (
    <div className="serviceContainer mt-6">
  <div className="serviceCards">
    {_.map(schedules, (card, index) => {
      return (
        <div className="card cardWidth" key={index}>
          <div className="divRow">

            <div className="divCol">
              <div className="cardText">
                <div>
                  <h4>Available Slots</h4>
                </div>
              </div>
              <div className="paddingLeft">  
                <div><b>Date</b>: {getDate(card.start_time)}</div>
                <div><b>Time</b>: {getTime(card.start_time)}</div>
              </div>
              <div className="cardBtn">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    setShowDeleteModal(true);
                  }}
                />
              </div>
              <div>
              <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Schedule?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>handleDelete(card._id)}>
            Yes, delete
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
             
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

  )
}
export default ViewSchedule;
