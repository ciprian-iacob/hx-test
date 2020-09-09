import React from 'react';
import './index.css';

export default function TableRow({ children }) {
    return (
        <tr className="table-row">{children}</tr>
    )
}