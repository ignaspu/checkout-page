import Cashback from "../../svg/Cashback";
import Customer from "../../svg/Customer";
import Rating from "../../svg/Rating";
import "./whychoose.css";

const WhyChoose = () => {
  return (
    <div className="px-3 pb-4 containerWhyChoose">
      <div className="d-flex align-items-center gap-3 justify-content-center mb-3">
        <div className="textBorder">
          <h4 className="whyText">Why Choose LogoIpsum</h4>
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="iconSize">
          <Cashback />
        </div>

        <div>
          <p className="whyHeading">90-Day Money Back Guarantee</p>
          <p className="whyPar">
            We love our products and we're confident you will too! If you're not
            in love with your LogoIpsum product, our easy return and refund
            policy is designed to make things as easy as possible for you.
          </p>
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="iconSize">
          <Rating />
        </div>
        <div>
          <p className="whyHeading">Over 75,000+ Happy Customer</p>
          <p className="whyPar">
            Everyone that tries LogoIpsum says it’s a must-have. We invest a lot
            of love and care into making our products, so you can enjoy seeing
            results when using it.
          </p>
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="iconSize">
          <Customer />
        </div>
        <div>
          <p className="whyHeading">Professional Customer Support</p>
          <p className="whyPar">
            Our customer service works 24/7 for your satisfaction. Feel free to
            reach out to us anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
