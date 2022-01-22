import './Quiz.css';
import React, { useState, useEffect } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

const Quiz = ({ questions, userName, score, setScore, setQuestions }) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [options, setOptions] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  useEffect(() => {
    if (questions !== '') {
      setOptions(
        answerShuffleHandler([
          questions[questionIndex].correct_answer,
          ...questions[questionIndex].incorrect_answers,
        ])
      );
    }
  }, [questionIndex, questions]);

  const answerShuffleHandler = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };
  const answerHandler = (el) => {
    setDisabled((prev) => !prev);
    console.log(el, '|', questions[questionIndex].correct_answer);
    if (el === questions[questionIndex].correct_answer) {
      console.log('Correct');
      setSelectedAnswer('');
      setScore((prev) => prev + 1);
      if (questionIndex < 9) {
        setTimeout(() => {
          setQuestionIndex((prev) => prev + 1);
          setDisabled((prev) => !prev);
        }, 4000);
      } else {
        navigate('/result');
      }
    } else {
      console.log('Incorrect');
      setSelectedAnswer('');
      setTimeout(() => {
        setQuestionIndex((prev) => prev + 1);
        setDisabled((prev) => !prev);
      }, 4000);
    }
  };
  return (
    <div className='quiz__container'>
      {options ? (
        <div>
          Wellcome, {userName}, you are currently passing{' '}
          {questions[questionIndex].category} theme quiz with Score of {score}
          <div>Question {questionIndex + 1}</div>
          <Question
            question={questions[questionIndex].question}
            setSelectedAnswer={setSelectedAnswer}
            options={options}
            disabled={disabled}
            answerHandler={answerHandler}
          />
          <div className='buttons__container'>
            <Button
              variant='contained'
              style={{ backgroundColor: 'red', width: '50%' }}
              size='large'
              onClick={() => {
                setSelectedAnswer('new');
                navigate('/');
              }}
            >
              Quit
            </Button>
            <Button
              variant='contained'
              style={{ width: '50%' }}
              color='primary'
              size='large'
              onClick={() => {}}
            >
              Next question
            </Button>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Quiz;
