import React, { useState } from 'react';
import './styles.css'

const Modal = ({ hideModal, toggleModal, children, hidePathogen, hidePesticides, hideHomewrecker, hidePineapple, hideBlueberry, hideDiesel, hideDream, hidePeach }) => {
    if (hideModal) return null;
    if (hidePathogen) return null;
    if (hidePesticides) return null;
    if (hideHomewrecker) return null;
    if (hidePineapple) return null;
    if (hideBlueberry) return null;
    if (hideDiesel) return null;
    if(hideDream) return null;
    if (hidePeach) return null;

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
