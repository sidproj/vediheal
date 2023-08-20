import Header from '../components/header';
import Footer from '../components/footer';
import BannerCarousel from '../components/bannerCarousel';
import { styled } from 'styled-components';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import CollapseBenefits from '../components/collapseBenefits';
import { Link } from 'react-router-dom';
import SampleServices from '../components/sampleServices';
import FeedbackCarousel from '../components/feedbackCarousel';
import Socials from '../components/socials';

const MainTitle = styled.div`
    text-align:center;
    color:#69707a;
    font-size:1.4rem;
    font-weight:500;
    font-family:'Quicksand',sans-serif;
    padding:0 1rem;
`

const RedSnap = styled.span`
    color:#ff4d4d;
`

const SubText = styled.div`
    color:#69707a;
    font-size:0.8rem;
    text-align:center;
    padding:0 1rem;
    margin-top:1rem;
    font-family:'Quicksand',sans-serif;
`

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:2rem;
    align-items:center;
    justify-content:center;
    margin-top:1.5rem;
    width:100%;
`

const ButtonRed = styled.div`
    background-color:#ff4d4d;
    padding:0.8rem 1rem;
    color:white;
    width:fit-content;
    text-align:center;
    border-radius:1.5rem;
`

const BoldTitle = styled.div`
    text-align:center;
    color:#69707a;
    font-size:1.4rem;
    font-weight:600;
    font-family:'Quicksand',sans-serif;
    padding:0 1rem;
`

const Main = ()=>{

    const [collapse,setCollapse] = useState(false);

    return(
       <>
        <Header/>
        
        <BannerCarousel/>
        
        <ContentContainer>
        
            <MainTitle>Modern problems with <RedSnap>Vedic</RedSnap> solutions</MainTitle>
            <SubText>
            We are a vedic-healing ecosystem that brings together multiple healing
            options to create an experience that can help us in treating modern
            problems with ancient vedic solutions.
            </SubText>

            <Link><ButtonRed onClick={()=>setCollapse(!collapse)}>Know More</ButtonRed></Link>

            <Collapse isOpened={collapse}>
                <CollapseBenefits/>
            </Collapse>

            <BoldTitle>Our <RedSnap>Services</RedSnap></BoldTitle>

            
            <Link to="/services">
                <ButtonRed onClick={()=>setCollapse(!collapse)}>View All</ButtonRed>
            </Link>

            <SampleServices/>
                        
        </ContentContainer>

        <FeedbackCarousel/>

        <Socials/>

       <Footer/>
       </>
    );
}

export default Main;