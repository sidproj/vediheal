import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:2rem 2rem 0rem 2rem;
  align-items:center;
`

const Caption1 = styled.h1`
  color:#ff4d4d;
  font-size:1.75rem;
  font-weight:600;
  text-align:center;
`

const Caption2 = styled.div`
  color:#fff;
  margin-top:0.5rem;
  font-weight:500;
  font-size:1.1rem;
`

const Banner = styled.div`
  background-color:#ff4d4d;
  padding: 0.5rem 2rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

const Section1 = styled.div`
  background-color:#f6f1eb;
  padding:2rem;
  padding-top:0rem;
`

const RedLarge = styled.span`
  color:#ff4d4d;
  font-weight:500;
  font-size:1.1rem;
`

const BookReikiTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:1rem;
    width:100%;
    margin: 0rem 2rem 1rem 2rem;
    font-weight:500;
    font-size:1.1rem;
`

const AboutUs = () => {

  const navigate = useNavigate();

  const goback = ()=>{
    navigate(-1);
  }
  
    useEffect(()=>{
      document.getElementById("root")?.scroll(0,0);
    },[]);
    
    return (
      <>
        <Header/>
        <Container>
          <BookReikiTitle>
            <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
            <div>About Us</div>
          </BookReikiTitle>
          <Caption1>About Us</Caption1>
        </Container>
        <Banner><Caption2>VediHeal</Caption2></Banner>
        <Section1>
          <p>At Vediheal, we are here to cure your daily modern mental health situations in Vedic ways. We are a Vedic-healing ecosystem that brings together multiple healing options to create an experience that can help us in treating modern problems with ancient Vedic solutions. </p>
          <p>We are here to provide the Vedic solution by performing distant healing which is scientifically proven. We as a team are deeply invested in solving the mental health issues in India.</p>
          <RedLarge>We are driven by the mission to help people live in peace and spread happiness. </RedLarge>
        </Section1>
        <Footer/>
      </>
    );
  };

  



  
  export default AboutUs;