import React from 'react';
import './index.css';

export default function TableCell({ children, type = null, span = null, align = null }) {
    return (
        type === 'th' ? 
            <th className="table-cell" align={align} colSpan={span}>{children}</th> : 
            <td className="table-cell" align={align} colSpan={span}>{children}</td>
    )
}