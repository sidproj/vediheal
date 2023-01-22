import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap'

import './AddService.css'


const AddService = () => {

  
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return(
 <>
    <button onClick={initModal} class="btn btn-col" type="button">
        Edit Service
      </button>
      <Modal show={isShow}>
          <Modal.Body>

                <div id="instructorreikis" className="servicelist">
           
                
                <div >
                  <input type="checkbox" />
                </div>  
                  <div >
                  <input type="checkbox" />
                </div>
                <div >
                  <input type="checkbox" />
                </div>
                </div>

                
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <button type="submit" class="btn btn-danger">Submit</button>
         </Modal.Footer>
      </Modal>   
 </>
  );
};

export default AddService;