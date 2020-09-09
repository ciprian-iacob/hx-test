import React from 'react';
import './EmployeeTable.css';

import projects from '../../assets/data/projects.json';
import roles from '../../assets/data/roles.json';

import Table from '../core/Table';
import TableHeader from '../core/TableHead';
import TableRow from '../core/TableRow';
import TableCell from '../core/TableCell';
import TableBody from '../core/TableBody';

import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete.svg';

export default function EmployeeTable({ employees, onDeleteClick, onEditClick }) {
  function getNameValue(id, type) {
    let value;

    switch(type) {
      case 'roles': 
        value = roles.find(project => project.id === Number(id));
        return value?.name || 'No role';
      case 'projects':
        value = projects.find(project => project.id === Number(id));
        return value?.name || 'No project';
      default:
        return 'Unassigned';
    }
  }

  return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell type="tr">Name</TableCell>
            <TableCell type="tr">Email</TableCell>
            <TableCell type="tr" align="center">Assigned Project</TableCell>
            <TableCell type="tr" align="center">Role</TableCell>
            <TableCell type="tr" align="center" span="2">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
            {employees.map(employee => {
                return (
                  <TableRow key={employee.id}>
                    <TableCell>
                      {employee.name}
                    </TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell align="center">{getNameValue(employee.assignedProject, 'projects')}</TableCell>
                    <TableCell align="center">{getNameValue(employee.role, 'roles')}</TableCell>
                    <TableCell align="center">
                      <span onClick={() => onEditClick(employee)} className="emp-table__icon">
                          <EditIcon />
                      </span>
                      <span onClick={() => onDeleteClick(employee)} className="emp-table__icon">
                          <DeleteIcon/>
                      </span>
                    </TableCell>
                  </TableRow>
                )
            })}
        </TableBody>
      </Table>
  )
}