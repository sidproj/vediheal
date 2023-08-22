import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:2rem 2rem;
  align-items:center;
`

const Caption1 = styled.div`
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

const Red = styled.span`
  color:#ff4d4d;
`

const RedLarge = styled.span`
  color:#ff4d4d;
  font-weight:600;
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

const BadRequest = () => {

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
          <div>Bad URL</div>
        </BookReikiTitle>
        <Caption1>Error 404</Caption1>
        
      </Container>
      <Banner><Caption2>Bad URL</Caption2></Banner>
      <Section1>
        <p>Opps! page not found!</p>
        <Link to="/">Goto Home</Link>
      </Section1>
      <Footer/>
    </>
  );
};

export default BadRequest;