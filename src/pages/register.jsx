import { styled } from "styled-components";
import Header from "../components/header";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:0.5rem;
`

const LoginCard = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:0.5rem;
    align-items:center;
    background-color:#f6f1eb;
    border-radius:0.7rem;
    padding:1rem 2rem;
    box-shadow:0 0.15rem 1.75rem 0 rgba(33,40,50,.15);
`
const Title = styled.div`
    font-size:1.5rem;
`

const SubTitle = styled.div`
    font-size:1.1rem;
    font-weight:500;
    text-align:center;
`
const Span = styled.span`
    color:#ff4d4d;
    text-decoration:underline;
`

const TextField = styled.input`
    height:2.5rem;
    width:16rem;
    font-size:1rem;
    background-color:#f6f1eb;
    border-radius:0.5rem;
    border:solid 1px #c5ccd6;
    padding:0.2em 1rem;
    color:#212529;
    margin-top:0.5rem;
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
    margin-bottom:1em;
    margin-top:1em;
`



const Register = ()=>{
    return(
        <>
            <Header/>
            <LoginContainer>
                <LoginCard>

                    <Title>Sign Up</Title>

                    <SubTitle>
                        Already have a VediHeal account? <br/>
                        <Link to="/login"><Span>Log in</Span></Link>
                    </SubTitle>
                
                    <TextField placeholder="First Name*"/>
                    <TextField placeholder="Last Name*"/>
                    <TextField placeholder="Email*"/>
                    <TextField placeholder="Phone Number*"/>
                    <TextField placeholder="Password*"/>
                    <TextField placeholder="Confirm Password*"/>

                    <Submit>Sign Up</Submit>                

                </LoginCard>
            </LoginContainer>
        </>
    )
}

export default Register;