import React from 'react';
import styles from './SelectorDropDown.module.scss';

function SelectorDropDown({
  label,
  star,
  options,
  selectedValue,
  onChange,
  disabled, // New prop for enabling/disabling the select element
}) {
  return (
    <div className={styles.addressLine}>
      <div className={styles.addressLine1label}>
        <label htmlFor="fname">
          {label} <span style={{ color: "red" }}>{star}</span>
        </label>
      </div>
      <div className={styles.addressLineinput}>
        <select
          name=""
          id=""
          value={selectedValue}
          onChange={onChange}
          disabled={disabled} // Set the disabled attribute here
        >
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


<SelectorDropDown
  label="Select Category"
  star="*"
  options={[
    { value: "", label: "Select category" },
    { value: "obc", label: "OBC" },
    { value: "sc", label: "SC" },
  ]}
  selectedValue={selectedCategory}
  onChange={handleCategoryChange}
  disabled={citizenIndia === "false"} // Pass the condition here
/>
