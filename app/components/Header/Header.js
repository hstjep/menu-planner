import React, {PropTypes} from 'react';  
import { Link } from 'react-router-dom';
import HomePage from './../home/HomePage';

const Header = (props) => {  
  return (
    <header>
          <nav>
            <ul>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/food'>Food</Link></li>
            </ul>
          </nav>
  </header>
  );
};

export default Header;  