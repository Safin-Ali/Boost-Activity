import React from 'react';
import brandLogo from './boost-activity.png';
import './header.css';

const Header = () => {
    return (
        <header className='my-5'>
            <div className="brand-logo container">
                <h1 className='text-start'><img src={brandLogo} alt="Brand Name" /> Boost Activity</h1>
            </div>
        </header>
    );
};

export default Header;