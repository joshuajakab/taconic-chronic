import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';

import './header.css';


const Header = props => {

    const [width] = useWindowWidthAndHeight();

    return (
        <div className='header-container'>
            {width < 900 ?
                <div className='phone-header'>
                    <Link id='home-link' to='/' onClick={props.home}><h1>Taconic Chronic</h1></Link>
                    <h1 onClick={props.click}>Menu</h1>
                </div>
                :
                <div className='wide-header'>
                    <Link className='header-links' to='/about'><h2 className='menu-links-text' >About Us</h2></Link>
                    <Link className='header-links' to='/tests'><h2>Test Results</h2></Link>
                    <Link id='header-home' to='/'><img src='https://drive.google.com/uc?id=1nyB-mPCPlyO9qWIiZHQKCBDyD1Yy4m8j' id='header-home-logo' alt='logo' /></Link>
                    <Link className='header-links' to='/'><h2 >Merch</h2></Link>
                    <Link className='header-links' to='/contact'><h2 className='menu-links-text' >Contact</h2></Link>
                </div>
            }

        </div>
    )
};

export default Header;
