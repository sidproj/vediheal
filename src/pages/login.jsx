import { styled } from "styled-components";
import Header from "../components/header";
import { useState } from "react";
import { useNavigate } from "react-router";
import configs from "../config.json";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:3em;
`

const LoginCard = styled.div`
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

const SubTitle = styled.div`
    font-size:1.1em;
    font-weight:500;
`
const Span = styled.span`
    color:#ff4d4d;
    text-decoration:underline;
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
const CheckBox = styled.input`
    width:1.5em;
    height:1.5em;
`

const Tnc = styled.div`
    margin-top:-1em;
    font-size:0.8em;
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:0.5em;
    max-width:23em;
`

const Submit = styled.button`
    width:15em;
    height:2.5em;
    background-color:#ff4d4d;
    color:white;
    font-size:1.2em;
    border:none;
    border-radius:0.5em;
    margin-bottom:2em;
`

const Login = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async()=>{
        const url = configs.SERVER_URL+"/login";
        const options = {
            method: "POST",
            body: JSON.stringify(data),
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
        <LoginContainer>
            <LoginCard>
                
                <Title>Log In</Title>
                <SubTitle>
                    Don't have an account?
                    <Link to="/register"><Span>Sign Up</Span></Link>
                </SubTitle>
                
                <TextField placeholder="Email Address*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField placeholder="Password*" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
                <SubTitle>Forgot your password?</SubTitle>
                
                <Tnc>
                    <CheckBox type="checkbox"/>
                    <p>I agree with VediHeal's<Span>Terms and Conditions</Span> and <Span>Privacy Policy</Span></p>
                </Tnc>

                <Submit onClick={handleSubmit}>Login</Submit>

            </LoginCard>
        </LoginContainer>
        </>
    );
}

export default Login;