import React from 'react';
import './index.css';

export default function Table({ children }) {
    return (
        <table className="table">
            {children}
        </table>
    )
}