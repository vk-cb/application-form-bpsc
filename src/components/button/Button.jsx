// Button.js

import React from 'react';
import styles from './Button.module.scss';

const Button = ({ color, title, backgroundColor, padding, hoverColor, fontSize, fontWeight,type}) => {
  const buttonStyle = {
    color: color || 'black', 
    backgroundColor: backgroundColor || 'white', 
    padding: padding || '8px', 
    borderRadius: '4px',
    '--hover-color': hoverColor || 'red',
    cursor: 'pointer',
    fontSize:fontSize,
    fontWeight:fontWeight,
  };

  return (
    <button style={buttonStyle} type={type} className={styles.btn}>
      {title}
    </button>
  );
};

export default Button;
