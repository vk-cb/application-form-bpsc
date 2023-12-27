import React from "react";
import InputBox from "../inputbox/InputBox";
import styles from "./FormInput.module.scss";

function FormInput({ labelTitle, placeHolder, star, onChange }) {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div className={styles.fname}>
      <div className={styles.fnamelabel}>
        <label htmlFor="fname">
          {labelTitle} <span style={{ color: "red" }}>{star}</span>
        </label>
      </div>

      <div className={styles.fnameinput}>
        <InputBox
          padding="5px 10px"
          fontSize="16px"
          fontWeight="500"
          InputWidth="95%"
          placeholder={placeHolder}
          onChange={handleChange}
          
        />
      </div>
    </div>
  );
}

export default FormInput;
