import { styled } from "styled-components";
import Service from "./service";

const ServicesContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em 2em;
    align-items:center;
    justify-content:center;
    row-gap: 1em;
`


const SampleServices = ()=>{

    // fetch api call to all reikis available and  
    // save it in recoil state
    // if none display something

    return(
        <>
            <ServicesContainer>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </ServicesContainer>
        </>
    );
}
export default SampleServices;