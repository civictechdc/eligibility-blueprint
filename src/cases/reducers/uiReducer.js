import {
    RECEIVE_CASES_SEARCH,
    REQUEST_CASES_SEARCH,
    SELECT_CASE
} from '../actions';

const defaultState = {
    isSearching: false,
    selectedCase: null
}

function ui(state = defaultState, action) {
    switch(action.type) {
        case SELECT_CASE:
            return {
                ...state,
                selectedCase: action.caseId
            }
        case REQUEST_CASES_SEARCH:
            return {
                ...state,
                isSearching: true
            }
        case RECEIVE_CASES_SEARCH:
            return {
                ...state,
                isSearching: false
            }
        default:
            return state;
    }
}

export default ui;