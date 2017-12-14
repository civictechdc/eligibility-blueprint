import {
    ADD_PROGRAM_ELIGIBILITY,
    START_OVER_ELIGBILITY
} from '../actions/eligibilityActions';

function eligiblePrograms(state = [], action) {
    switch(action.type) {
        case START_OVER_ELIGBILITY:
            return [];
        case ADD_PROGRAM_ELIGIBILITY:
            return [...state, ...action.eligiblePrograms]
        default:
            return state;
    }
}

export default eligiblePrograms;