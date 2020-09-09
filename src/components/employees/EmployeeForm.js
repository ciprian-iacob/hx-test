import React from 'react';
import Button from '../core/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './EmployeeForm.css';
import projects from '../../assets/data/projects.json';
import roles from '../../assets/data/roles.json'; 

export default function EmployeeForm({ formData, onFormSubmit }) {
    const formik = useFormik({
        initialValues: {
            id: formData?.id || null,
            name: formData?.name || '',
            email: formData?.email || '',
            assignedProject: formData?.assignedProject || '',
            role: formData?.role || ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, 'Must be 20 chars or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required')
        }),
        onSubmit: values => onFormSubmit(values)
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="emp-form__input">
                <label htmlFor='name'>Name</label>
                <input 
                    id='name'
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
            
            <div className="emp-form__input">
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            
            <div className="emp-form__input">
                <label htmlFor='assignedProject'>Assigned Project</label>
                <select id='assignedProject' name='assignedProject' onChange={formik.handleChange} value={formik.values.assignedProject}>
                    <option value={null}>Please select a project</option>
                    {projects.map((project, index) => <option key={index} value={project.id}>{project.name}</option>)}
                </select>
            </div>

            <div className="emp-form__input">
                <label htmlFor='role'>Role</label>
                <select id="role" name="role" onChange={formik.handleChange} value={formik.values.role}>
                    <option value={null}>Please select a role</option>
                    {roles.map((role, index) => <option key={index} value={role.id}>{role.name}</option>)}
                </select>
            </div>

            <Button type='submit' variant='success'>{formData ? 'Update' : 'Submit'}</Button>
        </form>
    )
}