import Header from "../components/header";
import Footer from "../components/footer";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import ChangePasswordModal from "../components/changePasswordModal";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router";
import { userAtom } from "../Recoil/user";
import configs from "../config.json";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const AccountContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:3rem;
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

const Error = styled.div`
    color:#ff4d4d;
    text-align:center;
`

const Caption1 = styled.h1`
  color:#ff4d4d;
  font-size:1.75rem;
  font-weight:600;
  text-align:center;
`

const UserAccount = ()=>{

    // toast
    const notify = (msg) => {
        toast.success(msg, {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    };

    const [fname,setFname] = useState(""); 
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    // change password modal
    const [changePassword,setChangePassword] = useState(false);
    const [error,setError] = useState("");

    const [user,setUser] = useRecoilState(userAtom);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = async()=>{
        setError(null);

        if(fname.length == 0){
            setError({error:"Please enter first name!"});
            return false;
        }
        if(lname.length == 0){
            setError({error:"Please enter last name!"});
            return false;
        }
        if(phone.length != 10){
            setError({error:"Please enter valid phone number!"});
            return false;
        }
        if(!validateEmail(email)){
            setError({error:"Please enter a valid email!"});
            return false;            
        }

        const url = configs.SERVER_URL+"/profile/edit/user";
        const options = {
            method: "POST",
            body: JSON.stringify({
                first_name:fname,
                last_name:lname,
                phone_no:phone,
                email:email,
                jwt:user.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(!data.error){
            notify("Profile Updated Succesfully");
            setUser(data);
        }
    }

    useEffect(()=>{
        if(!user) {
            navigate("/login");
            return;
        }
        setFname(user.user.first_name);
        setLname(user.user.last_name);
        setEmail(user.user.email);
        setPhone(user.user.phone_no);
    },[]);

    return(
        <>
            {
                changePassword && 
                <ChangePasswordModal 
                    notify={notify}
                    jwt={user.jwt} 
                    setChangePassword={setChangePassword}
                    route={"/profile/edit/user/password"}
                />
            }
            <Header/>
                <AccountContainer>
                    <AccountCard>
                        <Title><Caption1>User Account</Caption1></Title>
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
                                type="number"
                                value={phone}
                                onChange={(e)=>{setPhone(e.target.value)}}
                            />
                        </Field>

                        {
                            error && <Error>{error.error}</Error>
                        }
                        
                        <Submit onClick={handleSubmit}>Save</Submit>
                        <Submit onClick={()=>setChangePassword(true)}>Change Password</Submit>

                    </AccountCard>
                </AccountContainer>
                <ToastContainer theme="dark" />
            <Footer/>
        </>
    );
}

export default UserAccount;