import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE, 
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload will be object with prop and name
            return { ...state, [action.payload.prop]: [action.payload.value] }
        case EMPLOYEE_CREATE:
            //action.payload will be object with prop and name
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            //action.payload will be object with prop and name
            return INITIAL_STATE;
        default:
            return state;
    }
};