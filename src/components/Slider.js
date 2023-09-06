import React, { useState } from 'react';
import '../assets/styles/Slider.css'; // Make sure to create this CSS file

const Slider = ({onSliderChange}) => {
  const [value, setValue] = useState(1); // Initial value

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <span className="slider-value">{value}</span>
    </div>
  );
};

export default Slider;