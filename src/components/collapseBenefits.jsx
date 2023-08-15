import { styled } from "styled-components";
const benefits = [
    {
        id: 1,
        label: "SCIENCE PROVEN",
        subtext:
        "Reiki is a science proven japanese technique that helps in energy healing and is also an alternative to allopathic medicine.",
        image: require("../assets/images/1.png"),
    },
    {
        id: 2,
        label: "NO SIDE-EFFECTS",
        subtext:
        "Reiki has not been found to have any adverse effects. Because there is nothing about a Reiki session that can interfere with conventional medical care. The touch of Reiki is very light on or even off the body.",
        image: require("../assets/images/2.png"),
    },
    {
        id: 3,
        label: "COST EFFECTIVE",
        subtext:
        " Reiki address this in the most result-effective and cost-effective way.",
        image: require("../assets/images/3.png"),
    },
    {
        id: 4,
        label: "SLEAMLESS CARE",
        subtext:
        "From self-relaxation to healing, to positive energy and no stress, we can help with it all.",
        image: require("../assets/images/4.png"),
    },
];

const Container = styled.div`
    background-color:#ff4d4d;
    padding:2rem 0;
    width:100vw;
    display:flex;
    flex-direction:column;
`

const Title = styled.div`
    font-weight:600;
    text-align:center;
`

const Description = styled.div`
    color: white;
    font-size: 0.7rem;
    padding: 20px;
    text-align: center;
`

const BenifitContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    row-gap: 10px;
`

const BenefitTitle = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: black;
`

const BenefitSubtext = styled.div`
    font-size: 0.7rem;
    text-align: center;
`

const CollapseBenefits = ()=>{
    return(
        <Container>
            <Title>WHY REKI OVER THERAPY?</Title>
            <Description>
                We offer various reiki solutions to modern day problems like Depression,
                Pain, Sleep disturbances, health crisis and many more.
            </Description>

            {
                benefits.map((benefit)=>{
                    return(
                        <BenifitContainer>
                        <img src={benefit.image} height="60px" alt="img" />
                        <BenefitTitle>{benefit.label}</BenefitTitle>
                        <BenefitSubtext>{benefit.subtext}</BenefitSubtext>
                    </BenifitContainer>
                    )
                })
            }
        </Container>
    );
}

export default CollapseBenefits;
