import Header from "../components/header";
import Footer from "../components/footer";
import { styled } from "styled-components";


const AccountContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:3em;
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

const UserAccount = ()=>{
    return(
        <>
            <Header/>
                <AccountContainer>
                    <AccountCard>
                        <Title>Account</Title>
                        <TextField placeholder="First Name"/>
                        <TextField placeholder="Last Name"/>
                        <TextField placeholder="Email"/>
                        <TextField placeholder="Phone Number"/>

                        <Submit>Save</Submit>
                        <Submit>Change Password</Submit>

                    </AccountCard>
                </AccountContainer>
            <Footer/>
        </>
    );
}

export default UserAccount;