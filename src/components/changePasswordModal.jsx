import { faClose  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { styled } from "styled-components";
import configs from "../config.json";
import PasswordField from "./PasswordField";

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


const Error = styled.div`
    color:#ff4d4d;
    margin-top:1rem;
`

const ChangePasswordModal = (props)=>{

    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");

    const [error,setError] = useState(null);

    const strongPassword =(str)=>{
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }

    const checkError = ()=>{
        if(oldPassword.length == 0){
            setError({error:"Please enter old password!"});
            return false;
        }
        if(newPassword.length == 0){
            setError({error:"Please enter new password"});
            return false;
        }
        if(confPassword != newPassword){
            setError({error:"Passwords do not match"});
            return false;
        }
        if(!strongPassword(newPassword)){
            setError({error:"Please choose password with 8 charachters including symbol, letter and number."});
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
                old_password:oldPassword,
                password:newPassword,
                confirm_password:confPassword,
                jwt:props.jwt,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.status == "success"){
            props.notify("Password changed successfully!");
            props.setChangePassword(false);
        }else{
            setError({error:data.message});
        }
    }

    return(
        <Overlay>
            <Container>
                <TitleRow>
                    <Title>Change Password</Title>
                    <FontAwesomeIcon icon={faClose} onClick={()=>props.setChangePassword(false)}/>
                </TitleRow>
                <Hr/>
                
                <PasswordField placeholder="Current Password" value={oldPassword} setValue={setOldPassword} />

                <PasswordField placeholder="New Password" value={newPassword} setValue={setNewPassword}/>

                <PasswordField placeholder="Confirm New Password" value={confPassword} setValue={setConfPassword}/>

                {
                    error && <Error>{error.error}</Error>
                }
                <Hr/>
                <Submit onClick={handleSubmit}>Save</Submit>
            </Container>
        </Overlay>
    )
}

export default ChangePasswordModal;