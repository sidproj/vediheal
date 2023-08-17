import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterContainer = styled.div`
    width:100%;
    /* position:absolute; */
    bottom:0px;
    left:0px;
    right:0px;
    text-align:center;
    background-color:#ff4d4d;
    padding-bottom:1.5rem;
    display:flex;
    flex-direction:column;
    row-gap:0.5rem;
    margin-top: auto;
`

const Text = styled.span`
    color:#000;
`

const Footer = ()=>{
    return(
        <>
        <FooterContainer>
            <h3>Quick Links</h3>
            <Link to="/"><Text>Home</Text></Link>
            <Link to="/services"><Text>Services</Text></Link>
            <Link to="/about-us"><Text>About us</Text></Link>
            <Link to="/contact-us"><Text>Contact Us</Text></Link>
            <Link to="/privacy-policy"><Text>Privacy Policy and Terms & conditions</Text></Link>
        </FooterContainer>
        </>
    );
}

export default Footer;
