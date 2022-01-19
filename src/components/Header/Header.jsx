import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to={'/'} className='title'>
        Quiz App
      </Link>
      <hr className='divider' />
    </header>
  );
};

export default Header;
