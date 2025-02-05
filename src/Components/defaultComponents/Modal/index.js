import React, { useState } from 'react';
import './styles.css'

const Modal = ({ hideModal, toggleModal, children, hidePathogen, hidePesticides, hideHomewrecker, hidePineapple, hideBlueberry, hideDiesel, hideDream, hidePeach, hideGorilla, hideLPC, hideMasterkush23, hideShawty, hideTush, hideGorillaPath, hideLPCPath, hideMasterkushPath, hideShawtyPath, hideTushPath, hideOrangeCream, hideOcifer, hideOciferPath, hidePesticide24, hideMasterKushRosin, hideMasterKushRosinPath }) => {
    if (hideModal) return null;
    if (hidePathogen) return null;
    if (hidePesticides) return null;
    if (hideHomewrecker) return null;
    if (hidePineapple) return null;
    if (hideBlueberry) return null;
    if (hideDiesel) return null;
    if(hideDream) return null;
    if (hidePeach) return null;
    if (hideGorilla) return null;
    if (hideLPC) return null;
    if (hideMasterkush23) return null;
    if (hideShawty) return null;
    if (hideTush) return null;
    if (hideGorillaPath) return null;
    if (hideLPCPath) return null;
    if (hideMasterkushPath) return null;
    if (hideShawtyPath) return null;
    if (hideTushPath) return null;
    if (hideOrangeCream) return null;
    if (hideOcifer) return null;
    if (hideOciferPath) return null;
    if (hidePesticide24) return null;
    if (hideMasterKushRosin) return null;
    if (hideMasterKushRosinPath) return null;

    return [
        <div className='modalOverlay' >
            <div className='modalWrap'>
                <div className='modal'>
                    {children}
                </div>
            </div>
        </div>
    ];
}

export default Modal;
