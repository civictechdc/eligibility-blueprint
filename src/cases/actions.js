import cases from '../case.json';

export const REQUEST_CASES_SEARCH = 'REQUEST_CASES_SEARCH';
export const RECEIVE_CASES_SEARCH = 'RECEIVE_CASES_SEARCH';

export const SELECT_CASE = 'SELECT_CASE';

export function selectCase(caseId) {
    return {
        type: SELECT_CASE,
        caseId
    }
}

export function searchCases({lastName, dateOfBirth}) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_CASES_SEARCH
        });
        new Promise((resolve) => {
            setTimeout(resolve, 500);
        })
        .then(() => {
            const validCases = cases.filter((potentialCase) => {
                return potentialCase.lastName.toLowerCase().includes(lastName.toLowerCase())
            });
            dispatch({
                type: RECEIVE_CASES_SEARCH,
                validCases
            });
        });
    }
}