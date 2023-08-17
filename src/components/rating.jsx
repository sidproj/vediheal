import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props)=> {

  const getStars = ()=>{
    const elements = [];
    const stars = props.stars;
    let rest = 5-stars;

    for(let i =0;i<stars;i++){
      elements.push(<FontAwesomeIcon color="#FFC300" icon={faStar} height="20px" />);
    }
    for(let i =0;i<rest;i++){
      elements.push(<FontAwesomeIcon  icon={faStar} height="20px" />);
    }
    return(
      elements 
    );
  }

  return (
    <div>
      {getStars()}
    </div>
  );
}

export default Rating;