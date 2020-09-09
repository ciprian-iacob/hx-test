import React from 'react';
import './index.css';

export default function Button({ children, onClick, type = null, variant = null }) {
    let btnClassName = 'emp-btn';
    
    if (variant) {
        btnClassName = `${btnClassName} ${btnClassName}--${variant}`;
    }

    return (
        <button 
            className={btnClassName}
            onClick={onClick}
            type={type || 'button'}>
                {children}
        </button>
    )
}