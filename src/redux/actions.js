import { 
    FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAIL, 
    ADD_EMPLOYEE, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL,
    EDIT_EMPLOYEE, EDIT_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_FAIL, 
    DELETE_EMLPOYEE, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAIL, 
} from './constants';
import httpRequest from '../helpers/httpRequest';

const apiUrl = 'https://q94l763a6j.execute-api.eu-west-1.amazonaws.com';

export function fetchEmployees() {
    return async(dispatch) => {
        dispatch({
            type: FETCH_EMPLOYEES
        });

        const employeesAPI = `${apiUrl}/employees`;

        try {
            const response = await new httpRequest(employeesAPI).get();

            dispatch({
                type: FETCH_EMPLOYEES_SUCCESS,
                payload: response
            });
        } catch(err) {
            dispatch({
                type: FETCH_EMPLOYEES_FAIL,
                error: err
            });
        }
    }
}

export function addEmployee(payload) {
    return async(dispatch) => {
        dispatch({
            type: ADD_EMPLOYEE
        });

        const employeesAPI = `${apiUrl}/employee`;

        try {
            await new httpRequest(employeesAPI).post(payload);

            dispatch({
                type: ADD_EMPLOYEE_SUCCESS,
                payload
            });
        } catch(err) {
            dispatch({
                type: ADD_EMPLOYEE_FAIL,
                error: err
            })
        }
    }
}

export function updateEmployee(payload) {
    return async(dispatch) => {
        dispatch({
            type: EDIT_EMPLOYEE
        });

        const employeesAPI = `${apiUrl}/employee`;

        try {
            await new httpRequest(employeesAPI).patch(payload);

            dispatch({
                type: EDIT_EMPLOYEE_SUCCESS,
                payload
            });
        } catch(err) {
            dispatch({
                type: EDIT_EMPLOYEE_FAIL,
                error: err
            })
        }
    }
}

export function deleteEmployee(payload) {
    return async(dispatch) => {
        dispatch({
            type: DELETE_EMLPOYEE
        });

        const employeesAPI = `${apiUrl}/employee`; 

        try {
            await new httpRequest(employeesAPI).delete(payload);

            dispatch({
                type: DELETE_EMPLOYEE_SUCCESS,
                payload
            });
        } catch(err) {
            dispatch({
                type: DELETE_EMPLOYEE_FAIL,
                error: err
            })
        }
    }
} 