import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import configs from "../config.json";


const AccountContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:3rem;
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


const ContactUs = ()=>{
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
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
                message:message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        console.log(data);
    }

    return(
        <>
            <Header/>
            <AccountContainer>
                <AccountCard>
                    <Title>Contact Us</Title>
                    <Field>
                        <Label>Name</Label>
                        <TextField value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </Field>
                    <Field>
                        <Label>Email</Label>
                        <TextField type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Field>
                    <Field>
                        <Label>Message</Label>
                        <TextArea value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                    </Field>

                    {
                        error && <Error>{error.error}</Error>
                    }

                    <Submit onClick={handleSubmit}>Submit</Submit>
                </AccountCard>
            </AccountContainer>
            <Footer/>
        </>
    )
}

export default ContactUs;