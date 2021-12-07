import { useState } from "react";
import './PricingSwitch.scss';
// import tw from "twin.macro";
import { Button, Card } from 'react-bootstrap';


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
      durationPrices: ["$0", "$0", "$0"],
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
      <div className="container pricing" id="pricing">
        <div>
          <h3 className="title">Price Plans</h3>
          <h5 className="sub-title">What we offer</h5>
          <div className="PriceBtns">
            {planDurations.map((planDuration, index) => (
              <Button className="priceBtns__items" active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</Button>
            ))}
          </div>
        </div>
        <div className="container">
        <div className="d-flex plansItems row justify-content-around">
          {plans.map((plan, index) => (
            <div  key={index} className="col-lg-3 col-md-6 col-sm-12 ">
              <Card className="plansItems_content pt-4 pb-2 my-2">
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <div className="mb-3">
                  <Card.Subtitle className="cardPrice mb-2">{plan.durationPrices[activeDurationIndex]}</Card.Subtitle>
                  <Card.Title className="cardTitle">{plan.name}</Card.Title>
                  <Card.Text className="text-dark text-muted">
                    {plan.mainFeature}
                  </Card.Text>
                </div>
                <Card.Text className="w-100">
                  {plan.features[activeDurationIndex].map((feature, index) => (
                    <span key={index} className="feature">
                      <span style={{ 'display': 'block' }} className="featuer">{feature}</span>
                    </span>
                  ))}
                </Card.Text>
                <Button className="plan-btn w-50 mt-2 ">Buy Now</Button>
              </Card.Body>
            </Card>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>

  );
};

export { PricingSwitch }