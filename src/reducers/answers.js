import {
    LOAD_FIRST_QUESTION,
    LOAD_PREVIOUS_QUESTION,
    SELECT_ANSWER
} from '../actions/answers';
import {
    ADD_PROGRAM_ELIGIBILITY,
    START_OVER_ELIGBILITY
} from '../actions/eligibilityActions';


const initialState = {
    current: null,
    previous: [],
    future: [],
    responses: {},
    done: false,
    calculated: false
}

function answers(state = initialState, action) {
    switch(action.type) {
        case START_OVER_ELIGBILITY:
            return {
                ...state,
                done: false,
                calculated: false,
                responses: {}
            }
        case SELECT_ANSWER: {
            const {answer, question, nextQuestions} = action;
            const allFutureQuestions = [...state.future, ...nextQuestions];
            const done = allFutureQuestions.length === 0;
            return {
                ...state,
                done,
                current: allFutureQuestions[0] || null,
                previous: [
                    ...state.previous,
                    question
                ],
                future: allFutureQuestions.slice(1),
                responses: {
                    ...state.responses,
                    [question]: answer}
                }
            }
        case LOAD_PREVIOUS_QUESTION:
          return {
            ...state,
            current: action.prevQuestion.id
          }
        case ADD_PROGRAM_ELIGIBILITY:
            return {
                ...state,
                calculated: true
            }
        case LOAD_FIRST_QUESTION:
            return {
                ...state,
                current: action.firstQuestion.id
            }
        default:
            return state;
    }
}

export default answers;
