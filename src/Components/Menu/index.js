import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = props => {

    return(
        <div className='menu-container'>
            <Link className='menu-links' to='/about'><h2 className='menu-links-text' onClick={props.click}>About Us</h2></Link>
            <Link className='menu-links' to='/tests'><h2 onClick={props.click}>Test Results</h2></Link>
            <Link className='menu-links' to='https://app.merch38.com/product/?campaign=62571647a337ea3cfd6838a1'><h2 onClick={props.click}>Merch</h2></Link>
            <Link className='menu-links' to ='/contact'><h2 className='menu-links-text' onClick={props.click}>Contact</h2></Link>
        </div>
    )
};

export default Menu;
