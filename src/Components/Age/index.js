import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

/*Components*/
import Button from '../defaultComponents/Button';

/*css*/
import './age.css';

const Age = ({ageToggle}) => {

    const [ageAnswer, setAgeAnswer] = useState(false);
    const history = useNavigate();

    const navigateTo = () => history.push('/home')

    

    return (
        
        <div className='age-background'>
            <div className='age-container'>
                <div className='age-question'>
                    <h1 id='age-question-text'>Are you over 21 years of age?</h1>
                </div>
                <div className='age-answer'>
                    <Button id='age-answer-button' onClick={() => ageToggle()}><h2 id='age-yes'>Yes</h2></Button>
                    <Button id='age-answer-button'><h2 id='age-no'>No</h2></Button>
                </div>
            </div>

        </div>
    )
}

export default Age;
