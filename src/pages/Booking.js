import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Booking() {

  const details = [
  {
    id: 1,
    label: `Anti-<span class="redText">Depression</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique to get rid of anxiety and depression through our body’s natural healing ability.",
    image: require("../assets/5.png"),
    bookingDetails: {
      image: require("../assets/5.png"),
      label: "Anti-depression Reiki",
      benefits: [
        "Boosts Mood",
        "Relives Anxiety",
        "Heals Depression",
        "No Side Effect",
        "Get Rid Of Therapies",
      ],
      sessionPlan: [
        {
          label: "1 Reki session",
          price: 499,
          sessionCount: 1,
        },
        {
          label: "3 Reki session",
          price: 1299,
          sessionCount: 3,
        },
        {
          label: "5 Reki session",
          price: 1749,
          sessionCount: 5,
        },
      ],
      body: "Depression is a very common situation and every 1 in 15 people experience it in the world. We are here to address this in the most result-effective and cost-effective way. Reiki is a science and research proven technique to get rid of anxiety and depression by our body’s natural healing ability.",
      expectation:
        "This 30 min reiki healing session will help you lighten your mood,and you can experience improvement in physical symptoms, wellbeing and anxiety. At VediHeal we believe depression is not a disease to be cured whereas it is a situation that needs to be healed.",
    },
  },
  {
    id: 2,
    label: `Pain <span class="redText">Relief </span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique that helps decrease pain perception by healing the emotional aspect of pain.",
    image: require("../assets/6.png"),
    bookingDetails: {
      image: require("../assets/6.png"),
      label: "Pain relief",
      benefits: [
        "Boosts Mood",
        "Relives Anxiety",
        "Heals Depression",
        "No Side Effect",
        "Get Rid Of Therapies",
      ],
      sessionPlan: [
        {
          label: "1 Reki session",
          price: 499,
          sessionCount: 1,
        },
        {
          label: "3 Reki session",
          price: 1299,
          sessionCount: 3,
        },
        {
          label: "5 Reki session",
          price: 1749,
          sessionCount: 5,
        },
      ],
      body: "Depression is a very common situation and every 1 in 15 people experience it in the world. We are here to address this in the most result-effective and cost-effective way. Reiki is a science and research proven technique to get rid of anxiety and depression by our body’s natural healing ability.",
      expectation:
        "This 30 min reiki healing session will help you lighten your mood,and you can experience improvement in physical symptoms, wellbeing and anxiety. At VediHeal we believe depression is not a disease to be cured whereas it is a situation that needs to be healed.",
    },
  },
  {
    id: 3,
    label: `Reiki for <span class="redText">Addiction</span> and <span class="redText">detoxification.</span>`,
    subtext:
      " Reiki helps a person to shift their energy in a positive direction and no longer want to use or abuse any illicit substances.",
    image: require("../assets/7.png"),
    bookingDetails: {
      image: require("../assets/6.png"),
      label: "Reiki for addiction and detoxification",
      benefits: [
        "Boosts Mood",
        "Relives Anxiety",
        "Heals Depression",
        "No Side Effect",
        "Get Rid Of Therapies",
      ],
      sessionPlan: [
        {
          label: "1 Reki session",
          price: 499,
          sessionCount: 1,
        },
        {
          label: "3 Reki session",
          price: 1299,
          sessionCount: 3,
        },
        {
          label: "5 Reki session",
          price: 1749,
          sessionCount: 5,
        },
      ],
      body: "Depression is a very common situation and every 1 in 15 people experience it in the world. We are here to address this in the most result-effective and cost-effective way. Reiki is a science and research proven technique to get rid of anxiety and depression by our body’s natural healing ability.",
      expectation:
        "This 30 min reiki healing session will help you lighten your mood,and you can experience improvement in physical symptoms, wellbeing and anxiety. At VediHeal we believe depression is not a disease to be cured whereas it is a situation that needs to be healed.",
    },
  },
  {
    id: 4,
    label: `Sleep <span class="redText">Disturbance</span> Reiki`,
    subtext:
      "Reiki is a scientific and research-proven technique that helps in solving the problems like Insomnia or Narcolepsy.",
    image: require("../assets/8.png"),
    bookingDetails: {
      image: require("../assets/8.png"),
      label: "Sleep disturbance reiki",
      benefits: [
        "Boosts Mood",
        "Relives Anxiety",
        "Heals Depression",
        "No Side Effect",
        "Get Rid Of Therapies",
      ],
      sessionPlan: [
        {
          label: "1 Reki session",
          price: 499,
          sessionCount: 1,
        },
        {
          label: "3 Reki session",
          price: 1299,
          sessionCount: 3,
        },
        {
          label: "5 Reki session",
          price: 1749,
          sessionCount: 5,
        },
      ],
      body: "Depression is a very common situation and every 1 in 15 people experience it in the world. We are here to address this in the most result-effective and cost-effective way. Reiki is a science and research proven technique to get rid of anxiety and depression by our body’s natural healing ability.",
      expectation:
        "This 30 min reiki healing session will help you lighten your mood,and you can experience improvement in physical symptoms, wellbeing and anxiety. At VediHeal we believe depression is not a disease to be cured whereas it is a situation that needs to be healed.",
    },
  },
  {
    id: 5,
    label: `Health <span class="redText">Crisis </span> Reiki`,
    subtext:
      "Support the well-being of people receiving traditional medical treatments such as chemotherapy, radiation, surgery, and kidney dialysis.",
    image: require("../assets/9.png"),
    bookingDetails: {
      image: require("../assets/9.png"),
      label: "Health Crisis Reiki",
      benefits: [
        "Boosts Mood",
        "Relives Anxiety",
        "Heals Depression",
        "No Side Effect",
        "Get Rid Of Therapies",
      ],
      sessionPlan: [
        {
          label: "1 Reki session",
          price: 499,
          sessionCount: 1,
        },
        {
          label: "3 Reki session",
          price: 1299,
          sessionCount: 3,
        },
        {
          label: "5 Reki session",
          price: 1749,
          sessionCount: 5,
        },
      ],
      body: "Depression is a very common situation and every 1 in 15 people experience it in the world. We are here to address this in the most result-effective and cost-effective way. Reiki is a science and research proven technique to get rid of anxiety and depression by our body’s natural healing ability.",
      expectation:
        "This 30 min reiki healing session will help you lighten your mood,and you can experience improvement in physical symptoms, wellbeing and anxiety. At VediHeal we believe depression is not a disease to be cured whereas it is a situation that needs to be healed.",
    },
  },
];

const { image, label, body, expectation } = details;
const benefits = details[0].bookingDetails.benefits;
const sessionPlan = details[0].bookingDetails.sessionPlan;

  return (
    <Card className="mt-8 mx-2">
      <Card.Header style = {{ backgroundColor : '#fce4de' }}>Book Your Reiki</Card.Header>
      <Card.Body>
        <Card className="">
              <Form className="mt-2 mx-2">
                  <fieldset>
              
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="SelectInstructor">Select Instructor</Form.Label>
                      <Form.Select id="instructor">
                        <option>Instructor 1</option>
                        <option>Instructor 1</option>
                        <option>Instructor 1</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="SelectReiki">Select Reiki</Form.Label>
                      <Form.Select id="reiki">
                        <option>Reiki 1</option>
                        <option>Reiki 1</option>
                        <option>Reiki 1</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Card>
                        <div>

                        
                               <div>
            <img                src={image} height="80px" alt="header" />
          </div>
                              <div >{label}</div>

                              <div>
                                {benefits.map((benefit, index) => {
                                  return(
                                  <div>
                                    <div className="benefit" key={index}>
                                      <img
                                        src={require("../assets/tick.png")}
                                        height="18px"
                                        alt="header"
                                      />
                                      {benefit}
                                    </div>
                                  </div>
                                  );
                                })}
                              </div>
                    </div>
                    </Card>
                    <Form.Group className="mb-3">
                                   <div className="sessions">
                                  {sessionPlan.map((plan, i) => {
                                    return (
                                      <div className="sessionCard smallfont" key={i}>
                                        <div>{plan.label}</div>
                                        <div className="priceContainer">
                                          ₹{plan.price}/
                                          {plan.sessionCount > 1
                                            ? plan.sessionCount + " Sessions"
                                            : "Session"}
                                          <input type="radio" className="radioButton" name={"radio"} />
                                        </div>
                                      </div>
                                    );
                                  })}
                  </div>
                    </Form.Group>
                  
                    <button type="submit" className="btn btn-col btn-lg mb-2">Book Session Now</button>
                  </fieldset>
    </Form>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default Booking;



