import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCard = styled.div`
    width:21em;
    background-color:#f8cfc1;
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:1em;
    border-radius:1em;
    position:relative;
`

const Img = styled.img`
    height:8em;
    object-fit:contain;
`

const Details = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:1em;
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
            <Img src="https://res.cloudinary.com/dmrzngif8/image/upload/v1675284620/Vediheal/5_wjbzrb.png"/>
            <Details>
                <DetailsTitle>Anti Depression Reiki</DetailsTitle>
                <DetailsDescription>
                    Reiki is a scientific and research-proven technique to get rid of anxiety & depression through our body’s natural healing ability.
                </DetailsDescription>
                
            </Details>
            <Link to="/servicedetails">
                <Select>
                    <FontAwesomeIcon color="black"  icon={faArrowRight} />
                </Select>
            </Link>
        </ServiceCard>
    )
}

export default Service;