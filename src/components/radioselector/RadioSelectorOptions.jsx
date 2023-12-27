import React from 'react';
import styles from './RadioSelectorOptions.module.scss';

function RadioSelectorOptions({
  labelTitle,
  star,
  radioName,
  options,
  selectedValue,
  onChange,
}) {
  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;

    if (onChange) {
      onChange(selectedOption);
    }
  };
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
              checked={option.value === selectedValue}
              onChange={handleRadioChange}
            />
            <label htmlFor={`radio-${index}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioSelectorOptions;

