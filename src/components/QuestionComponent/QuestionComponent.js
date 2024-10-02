import React, { useState } from 'react';
import styles from './QuestionComponent.module.css';

const QuestionComponent = ({ question, options }) => {
  const [selectedButton, setSelectedButton] = useState(null);



  return (
    <div className={styles.Question}>
      
    </div>
  );
};

export default QuestionComponent;
