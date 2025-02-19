import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const ThankYouMessage = ({ rating }) => {
  return (
    <div className="submitted-card">
      <Image src="/src/images/Online payment_Two Color(1) 2.svg" alt="Thank You" className="autism" />
      <Text className="select">You selected {rating} out of 5</Text>
      <h1 className="thank">Thank you!</h1>
      <Text className="ptag">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </Text>
    </div>
  );
};

export default ThankYouMessage;
