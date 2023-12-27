import React from 'react';
import styles from './SelectorDropDown.module.scss';

function SelectorDropDown({
  label,
  star,
  options,
  selectedValue,
  onChange,
}) {
  return (
    <div className={styles.addressLine}>
      <div className={styles.addressLine1label}>
        <label htmlFor="fname">
          {label} <span style={{ color: "red" }}>{star}</span>
        </label>
      </div>
      <div className={styles.addressLineinput}>
        <select name="" id="" value={selectedValue} onChange={onChange}>
          
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectorDropDown;
