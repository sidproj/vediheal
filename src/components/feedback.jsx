import { styled } from "styled-components";
import Rating from "./rating";

const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width:100%;
    align-items:center;
    justify-content:center;
`

const Redtext = styled.div`
    font-size:1.2rem;
    color:#ff4d4d;
`

const Comment = styled.div`
    font-size: 0.6rem;
`

const Feedback = (props)=>{

    return(
        <FeedbackContainer>
            <Rating stars={props.feedback.rating}/>
            <Redtext>{props.feedback.name}</Redtext>
            <Comment>{props.feedback.comment}</Comment>
        </FeedbackContainer>
    )

}

export default Feedback;