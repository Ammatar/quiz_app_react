import React, { useState, useEffect } from 'react';

const Answer = ({ el, disabled, answerHandler, setSelectedAnswer }) => {
  const [answerClass, setAnswerClass] = useState('answer__item');

  return (
    <button
      className={answerClass}
      key={el}
      onClick={async () => {
        answerHandler(el);
      }}
      disabled={disabled}
    >
      {el}
    </button>
  );
};

export default Answer;
