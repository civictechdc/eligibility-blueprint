import {
    push
} from 'react-router-redux';

export const SELECT_ANSWER = 'SELECT_ANSWER';
export const LOAD_FIRST_QUESTION = 'LOAD_FIRST_QUESTION';
export const LOAD_PREVIOUS_QUESTION = 'LOAD_PREVIOUS_QUESTION';


function selectAnswer(answer, question, nextQuestions) {
      return {
            type: SELECT_ANSWER,
            answer,
            question,
            nextQuestions
      };
}

export function selectedAnswer(thisAnswer, thisQuestion) {
      return (dispatch, getState) => {
            const state = getState();
            const selectedCase = state.cases.ui.selectedCase;
            const current = state.answers.current;
            const question = state.data.questions.find(question=> question.id === thisQuestion);
            const nextQuestions = question ? question.continueRules[JSON.stringify(thisAnswer)] || [] : [];
            dispatch(
              selectAnswer(thisAnswer, thisQuestion, nextQuestions)
              // push(`/questions/${selectedCase}/${current+1}`)
            );
            dispatch(push(`/questions/${selectedCase}/${current+1}`))

      }
}

export function loadFirstQuestion(){
      return (dispatch, getState) => {
            const { data, cases } = getState();

            const firstQuestion = data.questions.find(question => question.start === true);
            const selectedCase = cases.ui.selectedCase;
            dispatch(
              {
                  type: LOAD_FIRST_QUESTION,
                  firstQuestion
              },
            );
            dispatch(push(`/questions/${selectedCase}/1`))
      }
}

// todo figure out whether we want to save previous answers when we backtrack or forward track
export function loadPreviousQuestion() {
  //previous will be stacked
  return (dispatch, getState) => {
    const {answers, cases, data} = getState();
    const current = answers.current;
    const prevQuestion = data.questions.find(question => question.id === current-1);

    const selectedCase = cases.ui.selectedCase;
    if (current != 1) {
      dispatch(
        {
            type: LOAD_PREVIOUS_QUESTION,
            prevQuestion
        },
      );
      dispatch(push(`/questions/${selectedCase}/${current-1}`))
    }
  }
}
