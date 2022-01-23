import React from 'react';
import Answer from './Answer';

const Question = ({
  question,
  options,
  disabled,
  answerHandler,
  setSelectedAnswer,
}) => {
  return (
    <div className='question__container'>
      <div className='question__title'>{question}</div>
      <div className='answer__container'>
        {options &&
          options.map((el) => {
            return (
              <Answer
                key={el}
                el={el}
                disabled={disabled}
                setSelectedAnswer={setSelectedAnswer}
                answerHandler={answerHandler}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Question;
