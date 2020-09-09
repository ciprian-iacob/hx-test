import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../components/core/Button';
import EmployeeForm from '../components/employees/EmployeeForm';
import EmployeeTable from '../components/employees/EmployeeTable';
import EmployeeModal from '../components/employees/EmployeeModal';

import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from '../redux/actions';

function EmployeePage({ dispatch, employees }) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeletionOpen, setIsDeletionOpen] = useState(false);
    const [modalFormData, setModalFormData] = useState(null);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    function openModal(data = null, type = null) {
        data ? setModalFormData(data) : setModalFormData(null);
        type === 'edit' ? setIsEditOpen(true) : setIsDeletionOpen(true);
    }

    function closeModal(type) {
        type === 'edit' ? setIsEditOpen(false) : setIsDeletionOpen(false);
        setModalFormData(null);
    }

    function onEditClick(employee) {
        openModal(employee, 'edit');
    }

    function onDeleteClick(employee) {
        openModal(employee, 'delete');
    }

    function onFormSubmit(values) {
        modalFormData ? dispatch(updateEmployee(values)) : dispatch(addEmployee(values));

        closeModal('edit');
    }

    function onEmployeeDeletion() {
        if (modalFormData) {
            dispatch(deleteEmployee({ id: modalFormData.id }));
        }

        closeModal('delete');
    }

    return (
        <Fragment>
            <section>
                <header>
                    <h2>Employees list</h2>
                    <Button onClick={() => openModal(null, 'edit')} variant="success">Add employee</Button>
                </header>

                <EmployeeTable employees={employees} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
            </section>

            <EmployeeModal isOpen={isEditOpen} onClose={() => closeModal('edit')}>
                <EmployeeForm formData={modalFormData} onFormSubmit={onFormSubmit} />
            </EmployeeModal>

            <EmployeeModal isOpen={isDeletionOpen} onClose={() => closeModal('delete')}>
                <div className="emp-modal__confirmation">
                    Are you sure you want to delete employee {modalFormData?.name}?
                </div>

                <div className="emp-modal__actions">
                    <Button variant="danger" onClick={onEmployeeDeletion}>Yes</Button>
                    <Button variant="primary" onClick={() => closeModal('delete')}>No</Button>
                </div>
            </EmployeeModal>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return { employees: state || [] }
  }

export default connect(mapStateToProps)(EmployeePage);