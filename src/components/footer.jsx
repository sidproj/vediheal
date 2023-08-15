import { styled } from "styled-components";

const FooterContainer = styled.div`
    width:100%;
    /* position:absolute; */
    bottom:0px;
    left:0px;
    right:0px;
    text-align:center;
    background-color:#ff4d4d;
    padding-bottom:1rem;
    display:flex;
    flex-direction:column;
    row-gap:0.3rem;
    margin-top: auto;
`

const Footer = ()=>{
    return(
        <>
        <FooterContainer>
            <h3>Quick Links</h3>
            <div>Services</div>
            <div>About us</div>
            <div>Privacy Policy</div>
            <div>Terms and conditions</div>
        </FooterContainer>
        </>
    );
}

export default Footer;
