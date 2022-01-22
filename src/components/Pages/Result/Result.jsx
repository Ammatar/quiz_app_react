import './Result.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Result = ({ userName, score }) => {
  const navigate = useNavigate();
  return (
    <div className='result__container'>
      <div> You passed Quiz with score: {score} points!!!</div>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={() => navigate('/quiz')}
      >
        New quiz
      </Button>
    </div>
  );
};

export default Result;
