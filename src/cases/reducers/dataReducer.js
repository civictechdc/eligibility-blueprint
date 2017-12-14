import {
    RECEIVE_CASES_SEARCH
} from '../actions';

function data(state = [], action) {
    switch(action.type) {
        case RECEIVE_CASES_SEARCH:
            return [...action.validCases]
        default:
            return state;
    }
}

export default data;