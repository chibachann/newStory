import React, { useState } from 'react';
import * as styles from './QuestionComponent.module.css';

const QuestionComponent = ({ question, options }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedButton(option);
  };

  return (
    <div className={styles.Question}>
      <p>{question}<span className={styles.red}>*</span></p>
      <div className={styles.ButtonArea}>
        {options.map((option, index) => (
          <button
            key={index}
            className={selectedButton === option ? styles.selected : ''}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
