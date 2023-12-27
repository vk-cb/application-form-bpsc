import React from 'react';
import styles from './RadioSelectorOptions.module.scss';

function RadioSelectorOptions({
  labelTitle,
  star,
  radioName,
  options,
  disabled, // New prop for enabling/disabling radio inputs
}) {
  return (
    <div className={styles.physicallyDisabled}>
      <div className={styles.physicallyDisLabel}>
        <label htmlFor="fname">
          {labelTitle}
          <span style={{ color: "red" }}>{star}</span>
        </label>
      </div>
      <div className={styles.physicallyDisInput}>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={radioName}
              value={option.value}
              id={`radio-${index}`}
              disabled={disabled} // Set the disabled attribute here
            />
            <label htmlFor={`radio-${index}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioSelectorOptions;


<RadioSelectorOptions
  labelTitle="Are you citizen of India"
  star="*"
  radioName="citizenIndia"
  options={[
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ]}
  disabled={citizenIndia === "false"} // Pass the condition here
  onChange={handleCitizenIndiaChange}
/>
