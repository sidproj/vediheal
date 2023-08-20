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
    display:flex;
    flex-direction:column;
    row-gap:0.5rem;
    margin-top: auto;
`

const Text = styled.span`
    color:#000;
`

const BlackRibbon = styled.div`
    width:100%;
    padding:0.75rem 1rem;
    display:flex;
    flex-direction:column;
    background-color:#000;
    color:#fff;
    font-size:0.9rem;
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
            <BlackRibbon>&copy; 2023 Vediheal India. All rights reserved.</BlackRibbon>
        </FooterContainer>
        </>
    );
}

export default Footer;