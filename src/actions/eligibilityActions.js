export const CALCULATE_PROGRAM_ELIGIBILITY = 'CALCULATE_PROGRAM_ELIGIBILITY';
export const ADD_PROGRAM_ELIGIBILITY = 'ADD_PROGRAM_ELIGIBILITY';
export const START_OVER_ELIGBILITY = 'START_OVER_ELIGBILITY';

function addProgramEligibility(eligiblePrograms) {
    return {
        eligiblePrograms,
        type: ADD_PROGRAM_ELIGIBILITY
    }
}

export function startOverForEligibility() {
    return {
        type: START_OVER_ELIGBILITY
    }
}

export function calculateProgramsEligibility(responses) {
    return (dispatch, getState) => {
        const state = getState();
        const programs = state.data.programs;
        
        const eligiblePrograms = programs.reduce((eligiblePrograms, currentProgram) =>  {
            const requiredAnswers = currentProgram.questions;
            const eligible = calculateProgramEligibity(requiredAnswers, responses, state.data.questions)
            if(eligible) {
                return [...eligiblePrograms, currentProgram]
            }
            return eligiblePrograms;
        }, [])

        dispatch(addProgramEligibility(eligiblePrograms));
    }
}

function calculateProgramEligibity(requiredAnswers, responses, questions) {
    return Object.keys(requiredAnswers).reduce((isEligible, requiredAnswer) => {
        let isGoodAnswer;
        const question = questions.find(question => question.id.toString() === requiredAnswer.toString());

        if (question.answerType === 'categorical') {
            // Answer can be one of a list
            isGoodAnswer = requiredAnswers[requiredAnswer].includes(responses[requiredAnswer]);
        } else {
            isGoodAnswer = !!responses[requiredAnswer] === requiredAnswers[requiredAnswer];
        }
        return isEligible && isGoodAnswer;
    }, true);
}

