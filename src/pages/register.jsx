import { styled } from "styled-components";
import Header from "../components/header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import configs from "../config.json";
import { useRecoilState } from "recoil";
import { userAtom } from "../Recoil/user";
import PasswordField from "../components/PasswordField";

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

const CheckBox = styled.input`
    width:1.5em;
    height:1.5em;
`

const Tnc = styled.div`
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
    margin-bottom:1em;
    margin-top:1em;
`

const Error = styled.div`
    color:#ff4d4d;
    text-align:center;
`

const Register = ()=>{

    const navigate = useNavigate();

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [cPassword,setCPassword] = useState("");

    const [error,setError] = useState("");

    const [user,setUser] = useRecoilState(userAtom);

    const handleError = (data) =>{
        for(let key in data){
            if(data[key] != null){
                setError({error:data[key]});
                return;
            }
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const strongPassword =(str)=>{
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }

    const isValid = ()=>{
        if(fname.length == 0){
            setError({error:"Please enter first name!"});
            return false;
        }
        if(lname.length == 0){
            setError({error:"Please enter last name!"});
            return false;
        }
        if(email.length == 0){
            setError({error:"Please enter email name!"});
            return false;
        }
        if(phone.length !=10){
            setError({error:"Please enter valid phone number!"});
            return false;
        }
        if(password.length < 8){
            setError({error:"Please choose password with 8 charachters including symbol, letter and number."});
            return false;
        }
        if( password != cPassword){
            setError({error:"Passwords do not match!"});
            return false;
        }
        if(!document.getElementById("agreement-register").checked){
            setError({error:"Please agree with terms and conditions to proceed!"});
            return false;
        }
        if(!validateEmail(email)){
            setError({error:"Please enter a valid email!"});
            return false;
        }
        if(!strongPassword(password)){
            setError({error:"Please choose password with 8 charachters including symbol, letter and number."});
            return false;
        }
        setError(null);
    }

    const handleRegister = async()=>{
        if(isValid() == false )return;

        const url = configs.SERVER_URL+"/register/user";
        const options =  {
            method: "POST",
            body: JSON.stringify({
                first_name:fname,
                last_name:lname,
                email:email,
                phone_no:phone,
                password:password,
                confirm_password:cPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.errors ) handleError(data.errors);
        else{
            setUser(data);
            navigate("/");
        }
    }

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
                
                    <TextField placeholder="First Name*" value={fname} onChange={(e)=>setFname(e.target.value)}/>

                    <TextField placeholder="Last Name*" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                    
                    <TextField placeholder="Email*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    
                    <TextField type="number" placeholder="Phone Number*" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    
                    <PasswordField placeholder="Password" value={password} setValue={setPassword}/>

                    <PasswordField placeholder="Confirm Password" value={cPassword} setValue={setCPassword}/>
                    {
                        error && <Error>{error.error}</Error>
                    }

                    <Tnc>
                        <CheckBox type="checkbox" id="agreement-register"/>
                        <p>I agree with VediHeal's<Span>Terms and Conditions</Span> and <Span>Privacy Policy</Span></p>
                    </Tnc>

                    <Submit onClick={handleRegister}>Sign Up</Submit>                

                </LoginCard>
            </LoginContainer>
        </>
    )
}

export default Register;