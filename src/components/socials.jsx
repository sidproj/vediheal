import { styled } from "styled-components";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import youtube from "../assets/images/youtube.png";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    row-gap:1rem;
    margin-bottom:1rem;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    color:#697a70;
`

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding-bottom: 20px;
`

const Icon = styled.img`
    height:20px;
`

const Socials = ()=>{
    return(
        <Container>
            <Title>Connect with us</Title>
            <Icons>
                <Icon src={insta} alt="instagram"/>
                <Icon src={fb} alt="facebook"/>
                <Icon src={youtube} alt="youtube"/>
            </Icons>
        </Container>
    )
}

export default Socials;