import './Result.css';
import React from 'react';

const Result = ({ userName, score }) => {
  return (
    <div className='result__container'>
      <div> You passed Quiz with score: {score} points!!!</div>
    </div>
  );
};

export default Result;
