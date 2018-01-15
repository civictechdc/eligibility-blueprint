// import initial from '../data.json';
import initial from './fetchData';

const mockData = {
    ...initial
};

const data = function(state = mockData, action) {
  if (action.mydata && action.loadQuestions) {
    state.questions = action.mydata.questions;
    state.programs = action.mydata.programs;
  }
  return state;
}

export default data;
