import React from 'react';
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar">
        <div id="trapezoid">
            <a class="expandHome" href="/"><HomeOutlined /> Home</a>
            <a href="/cryptocurrencies" class="expandHome"><FundOutlined /> Cryptocurrencies</a>
            <a href="/news" class="expandHome"><BulbOutlined /> News</a>
        </div>
    </nav>
  )
}

export default Navbar