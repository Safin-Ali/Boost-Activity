import React from 'react';
import brandLogo from './boost-activity.png';
import './header.css';

const Header = () => {
    return (
        <header className='my-5'>
            <div className="brand-logo text-center text-lg-start">
                <h1><img src={brandLogo} alt="Brand Name" /> Boost Activity</h1>
            </div>
        </header>
    );
};

export default Header;