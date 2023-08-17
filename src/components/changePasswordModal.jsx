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
`

const ChangePasswordModal = (props)=>{

    const [showCurrentPass,setShowCurrentPass] = useState(false);
    const [showNewPass,setShowNewPass] = useState(false);
    const [showConfPass,setShowConfPass] = useState(false);

    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");

    const [error,setError] = useState(null);

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
                <TextField 
                    type={showCurrentPass ?"text":"password"} 
                    placeholder="Current Password"
                    value={oldPassword}
                    onChange={(e)=>{setOldPassword(e.target.value)}}
                />
                <Toggle>
                    {
                        showCurrentPass ? 
                        <FontAwesomeIcon icon={faEyeSlash} onClick={()=>setShowCurrentPass(false)}/> : 
                        <FontAwesomeIcon icon={faEye} onClick={()=>setShowCurrentPass(true)}/>
                    }
                </Toggle>

                <TextField 
                    type={showNewPass ?"text":"password"} 
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e)=>{setNewPassword(e.target.value)}}
                />
                <Toggle>
                    {
                        showNewPass ? 
                        <FontAwesomeIcon icon={faEyeSlash} onClick={()=>setShowNewPass(false)}/> : 
                        <FontAwesomeIcon icon={faEye} onClick={()=>setShowNewPass(true)}/>
                    }
                </Toggle>

                <TextField 
                    type={showConfPass ?"text":"password"} 
                    placeholder="Confirm New Password"
                    value={confPassword}
                    onChange={(e)=>{setConfPassword(e.target.value)}}
                />
                <Toggle>
                    {
                        showConfPass ? 
                        <FontAwesomeIcon icon={faEyeSlash} onClick={()=>setShowConfPass(false)}/> : 
                        <FontAwesomeIcon icon={faEye} onClick={()=>setShowConfPass(true)}/>
                    }
                </Toggle>
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