import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../defaultComponents/Modal';
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
            <Link onClick={togglePathogen}><h2>Harvest Lot Pathogen Test</h2></Link>
            <Link onClick={togglePesticides}><h2>Harvest Lot Pesticide Test</h2></Link>
            <Link onClick={toggleModal}><h2>Master Kush</h2></Link>
            <Link onClick={toggleHomewrecker}><h2>Homewrecker</h2></Link>
            <Link onClick={togglePineapple}><h2>Pineapple Muffin</h2></Link>
            <Link onClick={toggleBlueberry}><h2>Blueberry Muffin</h2></Link>
            <Link onClick={toggleDiesel}><h2>Diesel Roze</h2></Link>
            <Link onClick={toggleDream}><h2>Blue Dream</h2></Link>
            <Link onClick={togglePeach}><h2>Peach Crescendo</h2></Link>

            <Modal {...configPathogen}>
                <img src='https://drive.google.com/uc?id=12IrqhOe1iSZ056lqTl0r02YA4B6iLKW3' alt='test' className='test' />
                <h2 onClick={togglePathogen} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPesticides}>
                <img src='https://drive.google.com/uc?id=1foB7do_kYMCB7Iyzb3JF8owhEyOGV_kT' alt='test' className='test' />
                <h2 onClick={togglePesticides} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configModal}>
                
                <img src='https://drive.google.com/uc?id=1rq5KbWeHE_B-QThrqgGJqUszJRkpyv-M' alt='test' className='test' />
                <h2 onClick={toggleModal} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configHomewrecker}>
                <img src='https://drive.google.com/uc?id=18qdKUzHBsPXPDzjAlcDGymmhVwJ0aONj' alt='test' className='test' />
                <h2 onClick={toggleHomewrecker} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPineapple}>
                <img src='https://drive.google.com/uc?id=15N9vu0Muzw4SFECkCuH2kJeCRWvg1Yhw' alt='test' className='test' />
                <h2 onClick={togglePineapple} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configBlueberry}>
                <img src='https://drive.google.com/uc?id=1QvW9K8dgqU3f90ZIn-WoaVgwzo5PxZsb' alt='test' className='test' />
                <h2 onClick={toggleBlueberry} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configDiesel}>
                <img src='https://drive.google.com/uc?id=1gjYawx4_9j2DW9yckDQ87TW98GiO-SSH' alt='test' className='test' />
                <h2 onClick={toggleDiesel} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configDream}>
                <img src='https://drive.google.com/uc?id=1JFWYbRqKO_r9Ug7yEpwbx2Zcgxx1eZo6' alt='test' className='test' />
                <h2 onClick={toggleDream} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPeach}>
                <img src='https://drive.google.com/uc?id=180MiTFf_9-OjYfBAoXsLh2EzIJofMcGB' alt='test' className='test' />
                <h2 onClick={togglePeach} className='test-exit'>Back to list</h2>
            </Modal>
        </div>
    )
};

export default Testing;