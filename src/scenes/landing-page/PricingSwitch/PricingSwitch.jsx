import { useState } from "react";
import './PricingSwitch.scss';
// import tw from "twin.macro";
import { Button, Card, Container } from 'react-bootstrap';


const PricingSwitch = ({
  subheading = "Pricing",
  heading = "Flexible Plans",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  plans = null,
  primaryButtonText = "Buy Now",
  planDurations = [
    {
      text: "Week",
      switcherText: "Weekly",
    },
    {
      text: "Month",
      switcherText: "Monthly",
    },
    {
      text: "Year",
      switcherText: "Yearly",
    }
  ]
}) => {
  const defaultPlans = [
    {
      name: "Free Plan",
      durationPrices: ["$0", "$0","$0"],
      mainFeature: "For Personal Blogs",
      features: [["5 Templates", "2 Landing Pages", "5 Internal Pages", "Basic Assistance"], ["10 Templates", "5 Landing Pages", "5 Internal Pages", "Basic Assistance"], ["10 Templates", "5 Landing Pages", "5 Internal Pages", "Basic Assistance"]]
    },
    {
      name: "Premium Plan",
      durationPrices: ["$50", "$100", "$600"],
      mainFeature: "Suited for Production Websites",
      features: [["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"], ["100 Templates", "8 Landing Pages", "10 Internal Pages", "Basic Assistance"], ["100 Templates", "8 Landing Pages", "10 Internal Pages", "Basic Assistance"]]
    },
    {
      name: "Pro Plan",
      durationPrices: ["$100", "$500", "$800"],
      mainFeature: "Suited for Production Websites",
      features: [["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance", "Lifetime Updates"], ["120 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance", "Lifetime Updates"], ["120 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance", "Lifetime Updates"]],
      featured: true
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
      <section>
        <div className="container pricing">
          <div>
            {subheading && <h3 className="title mb-3">{subheading}</h3>}
            <h3 className="Text-dark fw-bold fs-1 ">{heading}</h3>
            {description && <p className="text-dark fs-6">{description}</p>}
            <div className="PriceBtns">
              {planDurations.map((planDuration, index) => (
                <Button className ="priceBtns__items" active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</Button>
              ))}
            </div>
          </div>
          <div className="d-flex plansItems">
            {plans.map((plan, index) => (
              <Card className="d-flex plansItems_content w-25 py-5 mx-2">
                <Card.Body>
                    <Card.Subtitle className="cardPrice mb-2">{plan.durationPrices[activeDurationIndex]}</Card.Subtitle>
                    <Card.Subtitle className="text-muted fs-5 fw-bold">{planDurations[activeDurationIndex].text}</Card.Subtitle>
                  <Card.Title className="cardTitle">{plan.name}</Card.Title>
                  <Card.Text className="text-dark fw-bold">
                    {plan.mainFeature}
                  </Card.Text>
                  <Card.Text>
                    {plan.features[activeDurationIndex].map((feature, index) => (
                      <span key={index} className="feature">
                        <span style={{ 'display': 'block' }} className="featuer">{feature}</span>
                      </span>
                    ))}
                  </Card.Text>
                  <Button className="text-white w-50 mt-5">Buy Now</Button>

                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
   
  );
};

export {PricingSwitch}