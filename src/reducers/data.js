// import initial from '../data.json';
import initial from './fetchData';
import cases from '../case.json';

const mockData = {
    ...initial,
    cases
};

const data = function(state = mockData, action) {
  if (action.mydata && action.loadQuestions) {
    state.questions = action.mydata.questions;
  }
  return state;
}

export default data;
