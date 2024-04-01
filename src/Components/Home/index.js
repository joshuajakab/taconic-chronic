import React from 'react';
import './home.css';
import Logo from '../../media/taconic-chronic-circle-transparent.png';

const Home = props => {

    return (
        <div id='home-container'> 
            <img src={Logo} id='home-logo' alt='logo' />
        </div>
    )
};

export default Home;
