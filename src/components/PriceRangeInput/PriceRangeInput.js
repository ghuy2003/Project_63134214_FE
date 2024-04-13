import React, { useEffect, useState } from "react";

const PriceRangeInput = ({data}) => {
  const [rangeValue, setRangeValue] = useState(0);
  
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="mb-3">
      <h4 className="mb-2">Price</h4>
      <input
        type="range"
        className="form-range w-100"
        id="rangeInput"
        name="rangeInput"
        min="0"
        max="500"
        value={rangeValue}
        onChange={(e) => handleRangeChange(e)}
      />
      <output id="amount" name="amount" min="0" max="500" htmlFor="rangeInput">
        {rangeValue}
      </output>
    </div>
  );
};

export default PriceRangeInput;
