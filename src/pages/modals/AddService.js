import React, { useState,useEffect } from "react";
import { Modal, Button } from 'react-bootstrap'

import './AddService.css'


const AddService = (props) => {

 
  
  const getSelectedReikies = async ()=>{
    const reikies = [];      
    const list = [...document.getElementsByClassName("instructorReikies")];
    const filtered = list.filter(x=>x.checked==true);
    filtered.map(reiki=>{
      reikies.push(reiki.id);
    });
    return reikies;
  }

  const handelReikiChange = async ()=>{
    const newReikies = await getSelectedReikies();
    // console.log(newReikies);
    const data = {
      "jwt":props.instructorJWT,
      "reiki":newReikies
    }
    const url = "https://vediheal-backend.vercel.app/reiki/addReiki";
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(url,options);
    const body = await res.json();
  }
  
  useEffect(()=>{
    console.log(props);
  },[]);

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return(
 <>
    <button onClick={initModal} class="btn " type="button">
        Edit Service
      </button>
      <Modal show={isShow}>
          <Modal.Body>

                <div id="instructorreikis" className="servicelist">                
                {
                  props.reikies.map(reiki=>{
                    return(
                      <div >
                        {
                          props.instructorReikies.includes(reiki._id)?
                          <input type="checkbox" id={reiki._id} className="instructorReikies" checked/>:
                          <input type="checkbox" id={reiki._id} className="instructorReikies" />
                        }
                        
                        <label>{reiki.name}</label>
                      </div>
                    )})
                }
              </div>

                
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <button type="submit" class="btn btn-danger" onClick={handelReikiChange} >Submit</button>
         </Modal.Footer>
      </Modal>   
 </>
  );
};

export default AddService;