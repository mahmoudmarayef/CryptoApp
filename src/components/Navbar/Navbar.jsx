import React from 'react';
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar">
        <div id="trapezoid">
            <Link to="/" className='expandHome'><HomeOutlined /> Home</Link>
            <Link to="/cryptocurrencies" className='expandHome'><FundOutlined /> Cryptocurrencies</Link>
            <Link to="/news" className='expandHome'><BulbOutlined /> News</Link>
        </div>
    </nav>
  )
}

export default Navbar