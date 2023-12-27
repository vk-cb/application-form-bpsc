import React, { useState } from "react";

function InputBox({
  type,
  placeholder,
  padding,
  fontSize,
  fontWeight,
  InputWidth,
  min,
  max,
  value,
  onChange,
}) {
  const InputStyle = {
    padding: padding || "8px",
    width: InputWidth || "100%",
    borderRadius: "4px",
    border: "0.5px solid gray",
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        style={InputStyle}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default InputBox;
