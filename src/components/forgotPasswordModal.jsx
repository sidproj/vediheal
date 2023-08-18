import { faClose, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { userAtom } from "../Recoil/user";
import configs from "../config.json";

const Overlay = styled.div`
    z-index:5;
    width:100%;
    height:100%;
    background-color:#00000094;
    position:fixed;
    display:flex;
    justify-content:center;
    flex-direction:row;
    font-family: 'Montserrat', sans-serif;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1rem;
    height:fit-content;
    background-color:white;
    width:100%;
    border-radius:0.5rem;
    padding:1rem 0;
    max-width:25rem;
`

const TitleRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:calc(100% - 2rem);
    margin:0.5rem 1rem 0rem 1rem;
`
const Title = styled.div`
    font-size:0.95rem;
    font-weight:500;
`
const Hr = styled.div`
    width:100%;
    height:0.1rem;
    background-color:#eaeaea;
    margin-bottom:1rem;
    margin-top:1rem;
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
    margin-bottom:1rem;
`

const Toggle = styled.div`
    align-self:flex-start;
    margin-left:2.5rem;
    margin-top:0.25rem;
`

const Error = styled.div`
    color:#ff4d4d;
    margin-top:1rem;
`

const ForgotPasswordModal = (props)=>{

    const [email,setEmail] = useState("");
    const [error,setError] = useState(null);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const checkError = ()=>{
        if(!validateEmail(email)){
            setError({error:"Please a valid email!"});
            return false;
        }
        return true;
    }

    const handleSubmit = async ()=>{

        if(!checkError()) return;

        const url = configs.SERVER_URL+props.route;
        const options = {
            method: "POST",
            body: JSON.stringify({
               email:email,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.error ){
            setError({error:data.error});
        }else{
            props.notify("New password is sent to the email");
            props.setForgotPassword(false);
        }
    }

    return(
        <Overlay>
            <Container>
                <TitleRow>
                    <Title>Forgot Password</Title>
                    <FontAwesomeIcon icon={faClose} onClick={()=>props.setForgotPassword(false)}/>
                </TitleRow>
                <Hr/>
                <TextField 
                    placeholder="Email address"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                {
                    error && <Error>{error.error}</Error>
                }
                <Hr/>
                <Submit onClick={handleSubmit}>Send</Submit>
            </Container>
        </Overlay>
    )
}

export default ForgotPasswordModal;