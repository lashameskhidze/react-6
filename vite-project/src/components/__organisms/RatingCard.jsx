import React, { useState } from "react";
import RatingButtons from "../molecules/RatingButtons";
import ThankYouMessage from "../molecules/ThankYouMessage";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const RatingCard = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  

  return (
    <div className="container">
      {submitted ? (
        <ThankYouMessage rating={rating} />
      ) : (
        <>
          <header>
            <Image src="/src/images/Star.svg" alt="Star" />
          </header>
          <h1 className="h1">How did we do?</h1>
          <Text className="p">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Text>
          <RatingButtons onSelect={setRating} selected={rating} />
          <Button
            onClick={() => rating !== 0 && setSubmitted(true)}
            className="btn"
          >
            SUBMIT
          </Button>
        </>
      )}
    </div>
  );
};

export default RatingCard;
