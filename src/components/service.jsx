import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCard = styled.div`
    background-color:#f8cfc1;
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:1em;
    border-radius:1em;
    position:relative;
`

const Img = styled.img`
    height:8rem;
    width: 6rem;
    object-fit:contain;
`

const Details = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:1em;
    margin-left:0.5rem;
`

const DetailsTitle = styled.div`
    text-align:center;
    font-weight:600;
    font-size:1.1em;
`

const DetailsDescription = styled.div`
    font-size:0.8em;
`

const Select = styled.div`
    position:absolute;
    bottom:12px;
    right:15px;
`

const Service = (props)=>{
    return (
        <ServiceCard>
            <Img src={props.data.image}/>
            <Details>
                <DetailsTitle>{props.data.name}</DetailsTitle>
                <DetailsDescription>
                    {props.data.description.substring(0,120)}...
                </DetailsDescription>
                
            </Details>
            <Link to="/servicedetails" state={{reiki:props.data}}>
                <Select>
                    <FontAwesomeIcon color="black"  icon={faArrowRight} />
                </Select>
            </Link>
        </ServiceCard>
    )
}

export default Service;