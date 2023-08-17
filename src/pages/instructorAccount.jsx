import Header from "../components/header";
import Footer from "../components/footer";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import ChangePasswordModal from "../components/changePasswordModal";
import InsturctorServiceModal from "../components/instructorServicesModal";
import { useRecoilState } from "recoil";
import { instructorAtom } from "../Recoil/instructor";
import { useNavigate } from "react-router";
import configs from "../config.json";


const AccountContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:0.5rem;
    margin-bottom:2rem;
`

const AccountCard = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:1em;
    align-items:center;
    background-color:#f6f1eb;
    border-radius:0.7em;
    padding:1em 2em;
    box-shadow:0 0.15rem 1.75rem 0 rgba(33,40,50,.15);
`
const Title = styled.div`
    font-size:1.5em;
`

const TextField = styled.input`
    height:2.5rem;
    width:16em;
    font-size:1em;
    background-color:#f6f1eb;
    border-radius:0.5em;
    border:solid 1px #c5ccd6;
    padding:0.2em 1em;
    color:#212529;
    margin-top:0.5em;
    &:focus{
        outline: 0 none;
    }
`

const TextArea = styled.textarea`
    height:7rem;
    width:16em;
    font-size:1em;
    background-color:#f6f1eb;
    border-radius:0.5em;
    border:solid 1px #c5ccd6;
    padding:0.2em 1em;
    color:#212529;
    margin-top:0.5em;
    font-family: 'Montserrat', sans-serif;
    &:focus{
        outline: 0 none;
    }
`

const Submit = styled.button`
    width:15em;
    height:2.5em;
    background-color:#ff4d4d;
    color:white;
    font-size:1.2em;
    border:none;
    border-radius:0.5em;
`

const Label = styled.div`
    font-size:0.9rem;
    color:#212529;
    margin-left:0.5rem;
`

const Field = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`

const InstructorAccount = ()=>{

    const [changePassword,setChangePassword] = useState(false);
    const [servicesModal,setServicesModal] = useState(false);
    const [instructor,setInstructor] = useRecoilState(instructorAtom);

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [description,setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async ()=>{
        const url = configs.SERVER_URL+"/profile/edit/instructor";
        const options = {
            method: "POST",
            body: JSON.stringify({
                first_name:fname,
                last_name:lname,
                phone_no:phone,
                email:email,
                jwt:instructor.jwt,
                description:description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        console.log(data);
        if(!data.error)
        setInstructor(data);
    }

    useEffect(()=>{
        if(!instructor){
            navigate("/instructor/login");
            return;
        }
        setFname(instructor.instructor.first_name);
        setLname(instructor.instructor.last_name);
        setEmail(instructor.instructor.email);
        setPhone(instructor.instructor.phone_no);
        setDescription(instructor.instructor.description);
    },[]);

    return(
        <>
            {
                changePassword && 
                <ChangePasswordModal 
                    jwt={instructor.jwt} 
                    setChangePassword={setChangePassword}
                    route={"/profile/edit/instructor/password"}
                />
            }
            {
                servicesModal && <InsturctorServiceModal setServicesModal={setServicesModal}/>
            }
            <Header/>
                <AccountContainer>
                    <AccountCard>
                        <Title>Instructor Account</Title>
                        <Field>
                            <Label>First Name</Label>
                            <TextField 
                                placeholder="First Name"
                                value={fname}
                                onChange={(e)=>{setFname(e.target.value)}}
                            />
                        </Field>

                        <Field>
                            <Label>Last Name</Label>
                            <TextField 
                                placeholder="Last Name"
                                value={lname}
                                onChange={(e)=>{setLname(e.target.value)}}
                            />
                        </Field>
                        
                        <Field>
                            <Label>Email</Label>
                            <TextField 
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </Field>
                        
                        <Field>
                            <Label>Phone Number</Label>
                            <TextField 
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e)=>{setPhone(e.target.value)}}
                            />
                        </Field>

                        <Field>
                            <Label>Description</Label>
                            <TextArea 
                                placeholder="Description"
                                value={description}
                                onChange={(e)=>{setDescription(e.target.value)}}
                            />
                        </Field>
                        
                        <Submit onClick={handleSubmit}>Save</Submit>
                        <Submit onClick={()=>setServicesModal(true)}>Edit Services</Submit>
                        <Submit onClick={()=>setChangePassword(true)}>Change Password</Submit>

                    </AccountCard>
                </AccountContainer>
            <Footer/>
        </>
    );
}

export default InstructorAccount;