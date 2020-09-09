import React from 'react';
import Modal from 'react-modal';
import './EmployeeModal.css';

import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function EmployeeModal({ isOpen, children, onClose }) {
    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <div className="emp-modal__body">
                {children}

                <span className="emp-modal__close-btn">
                    <CloseIcon onClick={onClose} />
                </span>
            </div>
        </Modal>
    )
}