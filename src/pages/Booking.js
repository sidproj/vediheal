import { useEffect ,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

function Booking() {

  //for all fetched data of instructors;
  const [instructors,setInstructors] = useState([]);
  //selected instructor
  const [selectedInstructor,setSelectedInstructor] = useState([]);
  //for all fetched data of reikies;
  const [selectDataInstructors,setSelectDataInstructors] = useState([]);

  //for all data that is to be used in react select tag;
  const [selectDataReikies,setSelectDataReikies] = useState([]);
  //the latest selected option of react select;
  const [selectedReiki,setSelectedReiki] = useState([]);
  //details about the recently selected option from react select;
  const [selectedReikiDetails,setSelectedReikiDetails] = useState([]);

  const getInstructorData = async ()=>{

    const url = "http://localhost:5000/reiki/instructor";
    const options = {
      method: 'GET', 
    }
    
    const result = await fetch(url,options);
    const body = await  result.json();
    const data=[];
    body?.map(instructor=>{
      data.push({
        label:instructor.first_name+" "+instructor.last_name,
        value:instructor._id
      });
    });
    setInstructors(body);
    setSelectDataInstructors(data);
  }

  useEffect(()=>{
    getInstructorData();
  },[]);

  useEffect(()=>{
    if(instructors != undefined){
      const instructor = instructors.find( x=> x._id == selectedInstructor.value);
      const data =[];
      instructor?.instructorReikis.map(reiki=>{
        data.push({
          label:reiki.name,
          value:reiki._id
        });
      });
      setSelectDataReikies(data);
    }
  },[selectedInstructor]);

  const getReikiBenifits = async()=>{
    const url = `http://localhost:5000/reiki/single/${selectedReiki.value}`;
    const options = {
      method: 'GET', 
    }
    const result = await fetch(url,options);
    const body = await  result.json();
    console.log(body);
    setSelectedReikiDetails(body);
  }

  useEffect(()=>{
    getReikiBenifits();
  },[selectedReiki]);

  return (
    <Card className="mt-8 mx-2">
      <Card.Header style = {{ backgroundColor : '#fce4de' }}>Book Your Reiki</Card.Header>
      <Card.Body>
        <Card className="">
              <Form className="mt-2 mx-2">
                  <fieldset>
              
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="SelectInstructor">Select Instructor</Form.Label>
                      <Select options={selectDataInstructors} onChange={setSelectedInstructor}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="SelectInstructor">Select Instructor's Reiki</Form.Label>
                      <Select options={selectDataReikies} onChange={setSelectedReiki}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <br/>
                    <Card>
                        <div>
                          <div>
                            {selectedReikiDetails?.benifits?.map((benefit) => {
                              return(
                              <div>
                                <div className="benefit" id={benefit._id}>
                                  <img
                                    src={require("../assets/tick.png")}
                                    height="18px"
                                    alt="header"
                                  />
                                  {benefit.name}
                                </div>
                              </div>
                              );
                            })}
                          </div>
                    </div>
                    </Card>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <div className="sessions">
                        pending....
                      </div>
                    </Form.Group>
                  
                    <button type="submit" className="btn btn-col btn-lg mb-2">Book Session Now</button>
                  </fieldset>
    </Form>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default Booking;



