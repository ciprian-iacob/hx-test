import { FETCH_EMPLOYEES_SUCCESS, ADD_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_SUCCESS } from './constants';

export default function employees(state = [], action) {
    let index, newState;

    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            return action.payload;
        case ADD_EMPLOYEE_SUCCESS:
            return [...state, { ...action.payload }];
        case EDIT_EMPLOYEE_SUCCESS:
            index = state.findIndex((el) => el.id === action.payload.id);
            
            newState = [...state];
            newState[index] = action.payload;

            return newState;
        case DELETE_EMPLOYEE_SUCCESS:
            index = state.findIndex((el) => el.id === action.payload.id);

            newState = [...state];
            newState.splice(index, 1);
            
            return newState;
        default:
            return state;
    }
} 