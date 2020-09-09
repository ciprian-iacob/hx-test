import React from 'react';
import './index.css';

export default function TableHeader({ children }) {
    return (
        <thead className="table-head">{children}</thead>
    )
}