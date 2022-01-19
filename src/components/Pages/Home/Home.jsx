// import { Button, MenuItem, TextField } from '@material-ui/core';
import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Home.css';

const data = [
  { category: 'General Knowledge', value: 0 },
  { category: 'Books', value: 1 },
  { category: 'Films', value: 2 },
];
const Home = ({ userName, setUserName }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  return (
    <div className='content'>
      <div className='content__settings'>
        <span className='content__title'>Quiz settings</span>
        <div className='content__settings-select'>
          <TextField
            style={{ marginBottom: 25 }}
            label='Enter your name'
            variant='outlined'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            select
            style={{ marginBottom: 25 }}
            label='Select Category'
            variant='outlined'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {data.map((el) => {
              return (
                <MenuItem key={el.category} value={el.value}>
                  {el.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            select
            style={{ marginBottom: 25 }}
            label='Select Difficulty'
            variant='outlined'
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key={'Easy'} value={'easy'}>
              Easy
            </MenuItem>
            <MenuItem key={'Medium'} value={'medium'}>
              Medium
            </MenuItem>
            <MenuItem key={'Hard'} value={'hard'}>
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              console.log('user: ', userName, 'cat - ', category);
            }}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <div className='content__banner'></div>
    </div>
  );
};

export default Home;
