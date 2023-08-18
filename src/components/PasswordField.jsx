import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { styled } from "styled-components"

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
    display: block;
`

const Field = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    position:relative;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    padding-right: 1rem;
`

const PasswordField = (props)=>{

    const [showPassword,setShowPassword] = useState(false);

    return(
        <Field>
            <TextField 
                type={
                    showPassword ? "text" : "password"
                }
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e)=>props.setValue(e.target.value)}
            />
            <Icon>
                {
                    showPassword ?
                    <FontAwesomeIcon icon={faEyeSlash} onClick={()=>setShowPassword(false)}/> :
                    <FontAwesomeIcon icon={faEye} onClick={()=>setShowPassword(true)}/>
                }
            </Icon>
        </Field>
    );
}

export default PasswordField;