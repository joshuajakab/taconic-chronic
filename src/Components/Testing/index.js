import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../defaultComponents/Modal';
import Pathogen23 from '../../media/pathogen.jpg';
import Pesticides23 from '../../media/pesticides.jpg';
import Masterkush from '../../media/master-kush.jpg';
import Homewrecker from '../../media/homewrecker.jpg';
import Pineapple from '../../media/pineapple-muffin.jpg';
import Blueberry from '../../media/blueberry-muffin.jpg';
import Diesel from '../../media/diesel-roze.jpg';
import Dream from '../../media/blue-dream.jpg';
import Peach from '../../media/peach-crescendo.jpg';
import './testing.css';

const Testing = props => {

    const [hidePathogen, setHidePathogen] = useState(true);
    const [hidePesticides, setHidePesticides] = useState(true);
    const [hideModal, setHideModal] = useState(true);
    const [hideHomewrecker, setHideHomewrecker] = useState(true);
    const [hidePineapple, setHidePineapple] = useState(true);
    const [hideBlueberry, setHideBlueberry] = useState(true);
    const [hideDiesel, setHideDiesel] = useState(true);
    const [hideDream, setHideDream] = useState(true);
    const [hidePeach, setHidePeach] = useState(true);

    const togglePathogen = () => setHidePathogen(!hidePathogen);
    const togglePesticides = () => setHidePesticides(!hidePesticides);
    const toggleModal = () => setHideModal(!hideModal);
    const toggleHomewrecker = () => setHideHomewrecker(!hideHomewrecker);
    const togglePineapple = () => setHidePineapple(!hidePineapple);
    const toggleBlueberry = () => setHideBlueberry(!hideBlueberry);
    const toggleDiesel = () => setHideDiesel(!hideDiesel);
    const toggleDream = () => setHideDream(!hideDream);
    const togglePeach = () => setHidePeach(!hidePeach);
 
    const configPathogen = {
        hidePathogen,
        togglePathogen
    };

    const configPesticides = {
        hidePesticides,
        togglePesticides
    };

    const configModal = {
        hideModal,
        toggleModal
    };

    const configHomewrecker = {
        hideHomewrecker,
        toggleHomewrecker
    };

    const configPineapple = {
        hidePineapple,
        togglePineapple
    };

    const configBlueberry = {
        hideBlueberry,
        toggleBlueberry
    };

    const configDiesel = {
        hideDiesel,
        toggleDiesel
    };

    const configDream = {
        hideDream,
        toggleDream
    };

    const configPeach = {
        hidePeach,
        togglePeach
    };


    return(
        <div id='testing-container'>
            <h1 id='testing-title'>Testing</h1>
            <h3 id='testing-subtitle'>(Click to view test)</h3>
            <Link onClick={togglePathogen} className='test-link'><h2>Harvest Lot Pathogen Test</h2></Link>
            <Link onClick={togglePesticides} className='test-link'><h2>Harvest Lot Pesticide Test</h2></Link>
            <Link onClick={toggleModal} className='test-link'><h2>Master Kush</h2></Link>
            <Link onClick={toggleHomewrecker} className='test-link'><h2>Homewrecker</h2></Link>
            <Link onClick={togglePineapple} className='test-link'><h2>Pineapple Muffin</h2></Link>
            <Link onClick={toggleBlueberry} className='test-link'><h2>Blueberry Muffin</h2></Link>
            <Link onClick={toggleDiesel} className='test-link'><h2>Diesel Roze</h2></Link>
            <Link onClick={toggleDream} className='test-link'><h2>Blue Dream</h2></Link>
            <Link onClick={togglePeach} className='test-link'><h2>Peach Crescendo</h2></Link>

            <Modal {...configPathogen}>
                <img src={Pathogen23} alt='test' className='test' />
                <h2 onClick={togglePathogen} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPesticides}>
                <img src={Pesticides23} alt='test' className='test' />
                <h2 onClick={togglePesticides} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configModal}>
                <img src={Masterkush} alt='test' className='test' />
                <h2 onClick={toggleModal} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configHomewrecker}>
                <img src={Homewrecker} alt='test' className='test' />
                <h2 onClick={toggleHomewrecker} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPineapple}>
                <img src={Pineapple} alt='test' className='test' />
                <h2 onClick={togglePineapple} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configBlueberry}>
                <img src={Blueberry} alt='test' className='test' />
                <h2 onClick={toggleBlueberry} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configDiesel}>
                <img src={Diesel} alt='test' className='test' />
                <h2 onClick={toggleDiesel} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configDream}>
                <img src={Dream} alt='test' className='test' />
                <h2 onClick={toggleDream} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPeach}>
                <img src={Peach} alt='test' className='test' />
                <h2 onClick={togglePeach} className='test-exit'>Back to list</h2>
            </Modal>
        </div>
    )
};

export default Testing;