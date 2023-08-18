import { styled } from "styled-components"
import gif from "../assets/images/loading.jpg";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-items:center;
    row-gap:2rem;
    margin:4rem;

`

const Img = styled.img`
    width:4rem;
    object-fit:contain;
    align-self:center;
    justify-self:center;
`

const Text = styled.div`
    color:#ff4d4d;
    font-size:1.1rem;
    font-weight:500;
`

const Loading = ()=>{
    return (
        <Container>
            <Img src={gif}/>
            <Text>Loading...</Text>
        </Container>
    )
}

export default Loading