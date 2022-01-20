import './Quiz.css';
import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

const Quiz = ({ questions, userName, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    if (questions) {
      setOptions(
        answerShuffleHandler([
          questions[questionIndex].correct_answer,
          ...questions[questionIndex].incorrect_answers,
        ])
      );
    }
  }, [questions]);
  const answerShuffleHandler = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };
  return (
    <div className='quiz__container'>
      {options ? (
        <div>
          Wellcome, {userName}, you are currently passing{' '}
          {questions[questionIndex].category} theme quiz with Score of {score}
          <div>Question {questionIndex + 1}</div>
          <div>{questions[questionIndex].question}</div>
          <div>
            {options &&
              options.map((el) => {
                return <div key={el}>{el}</div>;
              })}
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Quiz;
