import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import configs from "../config.json";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const AccountContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:1rem;
    margin-bottom:2rem;
`
const Title = styled.div`
    font-size:1.5em;
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

const Error = styled.div`
    color:#ff4d4d;
`


const BookReikiTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:1rem;
    width:100%;
    margin: 1rem 2rem 0rem 2rem;
    font-weight:500;
    font-size:1.1rem;
`
const Caption1 = styled.h1`
  color:#ff4d4d;
  font-size:1.75rem;
  font-weight:600;
  text-align:center;
`


const ContactUs = ()=>{
    
     // toast
     const notify = (msg) => {
        toast.success(msg, {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    };


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");

    const [error,setError] = useState(null);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = async()=>{
        setError(null);
        if(name.length == 0){
            setError({error:"Please enter name!"});
            return;
        }
        if(email.length == 0){
            setError({error:"Please enter email!"});
            return;
        }
        if(phone.length != 10){
            setError({error:"Please enter valid phone number!"});
            return;
        }
        if(message.length == 0){
            setError({error:"Please enter message!"});
            return;
        }
        if(!validateEmail(email)){
            setError({error:"Please enter valid email!"});
            return;
        }
        const url = configs.SERVER_URL+"/coupon/contactus";
        const options = {
            method: "POST",
            body: JSON.stringify({
                email:email,
                name:name,
                phone,phone,
                message:message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.status){
            notify("Thank you! We will get back to you!");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        }else{
            setError({error:data.message});
        }
        console.log(data);
    }

    useEffect(()=>{
        document.getElementById("root")?.scroll(0,0);
    },[]);

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    return(
        <>
            <Header/>
            <BookReikiTitle>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <div>Contact Us</div>
            </BookReikiTitle>
            <AccountContainer>
                <AccountCard>
                    <Title><Caption1>Contact Us</Caption1></Title>
                    {/* <Title>Contact Us</Title> */}
                    <Field>
                        <Label>Name</Label>
                        <TextField value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                    </Field>
                    <Field>
                        <Label>Email</Label>
                        <TextField type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Field>
                    <Field>
                        <Label>Phone</Label>
                        <TextField type="phone" placeholder="Phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                    </Field>
                    <Field>
                        <Label>Message</Label>
                        <TextArea value={message} placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}}/>
                    </Field>

                    {
                        error && <Error>{error.error}</Error>
                    }

                    <Submit onClick={handleSubmit}>Submit</Submit>
                </AccountCard>
            </AccountContainer>
            <ToastContainer theme="dark" />
            <Footer/>
        </>
    )
}

export default ContactUs;