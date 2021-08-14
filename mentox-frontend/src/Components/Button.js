import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/Groups'>
      <button className='btn' size="lg">Groups For You</button>
    </Link>
  );
}

export default Button;
