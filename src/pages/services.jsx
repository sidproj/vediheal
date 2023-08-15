import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import Service from "../components/service";
import { useNavigate } from "react-router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em;
    align-items:center;
    justify-content:center;
    row-gap: 1em;
`


const ServicesTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:1.5rem;
    margin-bottom:0rem;
`

const CaptionName = styled.div`
    font-size:1.2rem;
    font-weight:500;
    align-self:center;
`

const Services = ()=>{

    // fetch api call to all reikis available and  
    // save it in recoil state
    // if none display something

    const navigate = useNavigate();

    const goback = ()=>{
        navigate(-1);
    }

    return(
        <>
            <Header/>
            <ServicesTitle>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goback}/>
                <CaptionName>Reikies</CaptionName>
            </ServicesTitle>
            <ServicesContainer>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </ServicesContainer>
            <Footer/>
        </>
    );
}
export default Services;