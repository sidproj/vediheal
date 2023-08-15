import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";


const Caption1 = styled.h1`
  color:#000000;
`

const AboutUs = () => {
    return (
      <>
        <Header/>
        <div style={{ backgroundColor: '#fce4de', color:  '#ff4d4d', padding: '20px' }} className="mt-6">
          <Caption1>About Us</Caption1>
          <p>At Vediheal, we are here to cure your daily modern mental health situations in Vedic ways. We are a Vedic-healing ecosystem that brings together multiple healing options to create an experience that can help us in treating modern problems with ancient Vedic solutions. </p>
          <p>We are here to provide the Vedic solution by performing distant healing which is scientifically proven. We as a team are deeply invested in solving the mental health issues in India.</p>
          <h1>We are driven by the mission to help people live in peace and spread happiness. </h1>
        </div>
        <Footer/>
      </>
    );
  };

  



  
  export default AboutUs;