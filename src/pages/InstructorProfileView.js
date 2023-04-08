import React from 'react';
import BookAppointment from './modals/BookAppointment'
import { useHistory } from "react-router-dom";
import { useEffect, useState ,useLayoutEffect} from 'react';
import Form from 'react-bootstrap/Form';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage(props) {

  const history = useHistory();
    useEffect(()=>{
        if(!props.instructorJWT){
            history.push("/login");
        }
    },[]);

  
  const [instructor,setInstructor] = useState({});
  const [reikies,setReikies] = useState([]);
  
  const getInstructorData = async ()=>{
    const url = `https://vediheal-backend.vercel.app//reiki/instructor/${props.location.state.detail}`;
    const options = {
      method: 'GET', 
    }
    const result = await fetch(url,options);
    const body = await  result.json();
    // console.log(body);
    setInstructor(body);
    setReikies(body.instructorReikis);
  }
  
  useLayoutEffect( ()=>{
    getInstructorData();
  },[]);

  useEffect(()=>{
    // console.log(reikies);
  },[reikies]);

  function handleClick() {
    history.push("/booking");
  }

  const handleReikieList = ()=>{
    if(reikies.length!=0){
      reikies.map(reiki=>{
        <MDBListGroupItem>{reiki.name}</MDBListGroupItem>
      })
    }
  }

  return (
    <div className="mt-6">
    <section>
      <MDBContainer className="py-5" fluid>
        

        <MDBRow>
          
          <MDBCol lg="14">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{instructor.first_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{instructor.last_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{instructor.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{instructor.phone_no}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-col">Services Offered</span></MDBCardText>
                        <MDBListGroup style={{ minWidthL: '22rem' }} light>
                          
                            {reikies.map((item)=>{
                              return <MDBListGroupItem>{item.name}</MDBListGroupItem>
                            })}

                      </MDBListGroup>
                      <button onClick={handleClick} class="btn btn-col mt-2" type="button">
                          BookAppointment
                      </button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-col">Instructor's Experiences</span></MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>
                      {instructor.description}
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>          
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  );
}