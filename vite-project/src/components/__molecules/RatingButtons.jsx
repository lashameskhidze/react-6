import React from "react";
import Button from "../atoms/Button";

const RatingButtons = ({ onSelect, selected }) => {
  return (
    <div className="rating-buttons">
      {[1, 2, 3, 4, 5].map((value) => (
        <Button
          key={value}
          onClick={() => onSelect(value)}
          className={`wre ${selected === value ? "selected" : ""}`}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};

export default RatingButtons;
