import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../defaultComponents/Modal';
import Pathogen22 from '../../media/pathogen.jpg';
import Pesticides22 from '../../media/pesticides.jpg';
import Masterkush from '../../media/master-kush.jpg';
import Homewrecker from '../../media/homewrecker.jpg';
import Pineapple from '../../media/pineapple-muffin.jpg';
import Blueberry from '../../media/blueberry-muffin.jpg';
import Diesel from '../../media/diesel-roze.jpg';
import Dream from '../../media/blue-dream.jpg';
import Peach from '../../media/peach-crescendo.jpg';
import Gorilla from '../../media/gorilla-dance.jpg';
import LPC from '../../media/lpc.jpg';
import Masterkush23 from '../../media/master-kush-23.jpg';
import Shawty from '../../media/shawty.jpg';
import Tush from '../../media/tush-kush.jpg';
import GorillaPathogen from '../../media/gorilla-pathogen.jpg';
import LPCPathogen from '../../media/LPC-pathogen.jpg';
import MasterkushPathogen from '../../media/masterkush-pathogen.jpg';
import ShawtyPathogen from '../../media/shawty-pathogen.jpg';
import TushPathogen from '../../media/tush-pathogen.jpg';
import Pesticide23 from '../../media/pesticide23.jpg';
import OrangeCream from '../../media/orangecream-potency-test.png';
import Ocifer from '../../media/ocifer-potency.jpg';
import OciferPathogen from '../../media/ocifer-pathogens.jpg';
import Pesticide24 from '../../media/pesticides-24.jpg';
import MasterKushRosin from '../../media/masterkushrosin-potency.jpg';
import MasterKushRosinPath from '../../media/masterkushrosin-pathogen-test.jpg';
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
    const [hideGorilla, setHideGorilla] = useState(true);
    const [hideLPC, setHideLPC] = useState(true);
    const [hideMasterkush23, setHideMasterkush23] = useState(true);
    const [hideShawty, setHideShawty] = useState(true);
    const [hideTush, setHideTush] = useState(true);
    const [hideGorillaPath, setHideGorillaPath] = useState(true);
    const [hideLPCPath, setHideLPCPath] = useState(true);
    const [hideMasterkushPath, setHideMasterkushPath] = useState(true);
    const [hideShawtyPath, setHideShawtyPath] = useState(true);
    const [hideTushPath, setHideTushPath] = useState(true); 
    const [hidePesticide23, setHIdePesticide23] = useState(true);
    const [hideOrangeCream, setHideOrangeCream] = useState(true);
    const [hideOcifer, setHideOcifer] = useState(true);
    const [hideOciferPath, setHideOciferPath] = useState(true);
    const [hidePesticide24, setHidePestricide24] = useState(true);
    const [hideMasterKushRosin, setHideMasterKushRosin] = useState(true);
    const [hideMasterKushRosinPath, setHideMasterKushRosinPath] = useState(true);

 
    const togglePathogen = () => setHidePathogen(!hidePathogen);
    const togglePesticides = () => setHidePesticides(!hidePesticides);
    const toggleModal = () => setHideModal(!hideModal);
    const toggleHomewrecker = () => setHideHomewrecker(!hideHomewrecker);
    const togglePineapple = () => setHidePineapple(!hidePineapple);
    const toggleBlueberry = () => setHideBlueberry(!hideBlueberry);
    const toggleDiesel = () => setHideDiesel(!hideDiesel);
    const toggleDream = () => setHideDream(!hideDream);
    const togglePeach = () => setHidePeach(!hidePeach);
    const toggleGorilla = () => setHideGorilla(!hideGorilla);
    const toggleLPC = () => setHideLPC(!hideLPC);
    const toggleMasterkush23 = () => setHideMasterkush23(!hideMasterkush23);
    const toggleShawty = () => setHideShawty(!hideShawty);
    const toggleTush = () => setHideTush(!hideTush);
    const toggleGorillaPath = () => setHideGorillaPath(!hideGorillaPath);
    const toggleLPCPath = () => setHideLPCPath(!hideLPCPath);
    const toggleMasterkushPath = () => setHideMasterkushPath(!hideMasterkushPath);
    const toggleShawtyPath = () => setHideShawtyPath(!hideShawtyPath);
    const toggleTushPath = () => setHideTushPath(!hideTushPath);
    const togglePesticide23 = () => setHIdePesticide23(!hidePesticide23);
    const toggleOrangeCream = () => setHideOrangeCream(!hideOrangeCream);
    const toggleOcifer = () => setHideOcifer(!hideOcifer);
    const toggleOciferPath = () => setHideOciferPath(!hideOciferPath);
    const togglePesticide24 = () => setHidePestricide24(!hidePesticide24);
    const toggleMasterKushRosin = () => setHideMasterKushRosin(!hideMasterKushRosin);
    const toggleMasterKushRosinPath = () => setHideMasterKushRosinPath(!hideMasterKushRosinPath);     
 
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

    const configGorilla = {
        hideGorilla,
        toggleGorilla
    };

    const configLPC = {
        hideLPC,
        toggleLPC
    };

    const configMasterkush23 = {
        hideMasterkush23,
        toggleMasterkush23
    };

    const configShawty = {
        hideShawty,
        toggleShawty
    };

    const configTush = {
        hideTush,
        toggleTush
    };

    const configGorillaPath = {
        hideGorillaPath,
        toggleGorillaPath
    };

    const configLPCPath = {
        hideLPCPath,
        toggleLPCPath
    };

    const configMasterkushPath = {
        hideMasterkushPath,
        toggleMasterkushPath
    };

    const configShawtyPath = {
        hideShawtyPath,
        toggleShawtyPath
    };

    const configTushPath = {
        hideTushPath,
        toggleTushPath
    };

    const configPesticide23 = {
        hidePesticide23,
        togglePesticide23
    };

    const configOrangeCream = {
        hideOrangeCream,
        toggleOrangeCream
    };

    const configOcifer = {
        hideOcifer,
        toggleOcifer
    };

    const configOciferPath = {
        hideOciferPath,
        toggleOciferPath
    };

    const configPesticide24 = {
        hidePesticide24,
        togglePesticide24
    };

    const configMasterKushRosin = {
        hideMasterKushRosin,
        toggleMasterKushRosin
    };

    const configMasterKushRosinPath = {
        hideMasterKushRosinPath,
        toggleMasterKushRosinPath
    };

 

    return(
        <div id='testing-container'>
            <h1 id='testing-title'>Testing</h1>
            <h3 id='testing-subtitle'>(Click to view test)</h3>
            
            <h1 className='menu-link'>2022 </h1>
            
                <Link onClick={togglePathogen} className='test-link'><h2>Harvest Lot Pathogen Test</h2></Link>
                <Link onClick={togglePesticides} className='test-link'><h2>Harvest Lot Pesticide Test</h2></Link>
                <Link onClick={toggleModal} className='test-link'><h2>Master Kush</h2></Link>
                <Link onClick={toggleHomewrecker} className='test-link'><h2>Homewrecker</h2></Link>
                <Link onClick={togglePineapple} className='test-link'><h2>Pineapple Muffin</h2></Link>
                <Link onClick={toggleBlueberry} className='test-link'><h2>Blueberry Muffin</h2></Link>
                <Link onClick={toggleDiesel} className='test-link'><h2>Diesel Roze</h2></Link>
                <Link onClick={toggleDream} className='test-link'><h2>Blue Dream</h2></Link>
                <Link onClick={togglePeach} className='test-link'><h2>Peach Crescendo</h2></Link>
            
            
           <h1 className='menu-link'>2023</h1>
           
                <Link onClick={togglePesticide23} className='test-link'><h2>Harvest Lot Pesticide Test</h2></Link>
                <Link onClick={toggleGorilla} className='test-link' ><h2>Gorilla Dance</h2></Link>
                <Link onClick={toggleGorillaPath} className='test-link' ><h2>Gorilla Dance Pathogen Test</h2></Link>
                <Link onClick={toggleLPC} className='test-link' ><h2>LPC x Face Off OG x Kuwaii Purps</h2></Link>
                <Link onClick={toggleLPCPath} className='test-link' ><h2>LPC x Face Off OG x Kuwaii Purps Pathogen Test</h2></Link>
                <Link onClick={toggleMasterkush23} className='test-link' ><h2>Master Kush</h2></Link>
                <Link onClick={toggleMasterkushPath} className='test-link' ><h2>Master Kush Pathogen Test</h2></Link>
                <Link onClick={toggleShawty} className='test-link' ><h2>Shawty</h2></Link>
                <Link onClick={toggleShawtyPath} className='test-link' ><h2>Shawty Pathogen Test</h2></Link>
                <Link onClick={toggleTush} className='test-link' ><h2>Tush Kush</h2></Link>
                <Link onClick={toggleTushPath} className='test-link' ><h2>Tush Kush Pathogen Test</h2></Link>
                <Link onClick={toggleMasterKushRosin} className='test-link'><h2>Master Kush Flower Rosin Potency</h2></Link>
                <Link onClick={toggleMasterKushRosinPath} className='test-link'><h2>Master Kush Flower Rosin Pathogen</h2></Link>

            <h1 className='menu-link'>2024</h1>

                <Link onClick={toggleOrangeCream} className='test-link'><h2>Pressure Drops - Orange Cream Potency Test</h2></Link>
                <Link onClick={toggleOcifer} className='test-link'><h2>Ocifer Potency</h2></Link>
                <Link onClick={toggleOciferPath} className='test-link'><h2>Ocifer Pathogen</h2></Link>
                <Link onClick={togglePesticide24} className='test-link'><h2>Pesticides 2024</h2></Link>

           
            <Modal {...configPathogen}>
                <img src={Pathogen22} alt='test' className='test' />
                <h2 onClick={togglePathogen} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configPesticides}>
                <img src={Pesticides22} alt='test' className='test' />
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

            <Modal {...configGorilla}>
                <img src={Gorilla} alt='test' className='test' />
                <h2 onClick={toggleGorilla} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configGorillaPath}>
                <img src={GorillaPathogen} alt='test' className='test' />
                <h2 onClick={toggleGorillaPath} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configLPC}>
                <img src={LPC} alt='test' className='test' />
                <h2 onClick={toggleLPC} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configLPCPath}>
                <img src={LPCPathogen} alt='test' className='test' />
                <h2 onClick={toggleLPCPath} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configMasterkush23}>
                <img src={Masterkush23} alt='test' className='test' />
                <h2 onClick={toggleMasterkush23} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configMasterkushPath}>
                <img src={MasterkushPathogen} alt='test' className='test' />
                <h2 onClick={toggleMasterkushPath} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configShawty}>
                <img src={Shawty} alt='test' className='test' />
                <h2 onClick={toggleShawty} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configShawtyPath}>
                <img src={ShawtyPathogen} alt='test' className='test' />
                <h2 onClick={toggleShawtyPath} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configTush}>
                <img src={Tush} alt='test' className='test' />
                <h2 onClick={toggleTush} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configTushPath}>
                <img src={TushPathogen} alt='test' className='test' />
                <h2 onClick={toggleTushPath} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configOrangeCream}>
                <img src={OrangeCream} alt='test' className='test' />
                <h2 onClick={toggleOrangeCream} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configOcifer}>
                <img src={Ocifer} alt='test' className='test' />
                <h2 onClick={toggleOcifer} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configOciferPath}>
                <img src={OciferPathogen} alt='test' className='test' />
                <h2 onClick={toggleOciferPath} className='test-exit'>Back to list</h2>    
            </Modal> 

            <Modal {...configPesticide24}>
                <img src={Pesticide24} alt='test' className='test' />
                <h2 onClick={togglePesticide24} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configMasterKushRosin}>
                <img src={MasterKushRosin} alt='test' className='test' />
                <h2 onClick={toggleMasterKushRosin} className='test-exit'>Back to list</h2>
            </Modal>

            <Modal {...configMasterKushRosinPath}>
                <img src={MasterKushRosinPath} alt='test' className='test' />
                <h2 onClick={toggleMasterKushRosinPath} className='test-exit'>Back to list</h2>
            </Modal>

        </div>
    )
};

export default Testing;