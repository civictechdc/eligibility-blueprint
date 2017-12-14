import initial from '../data.json';
import cases from '../case.json';


const mockData = {
    ...initial,
    cases
};

function data(state = mockData, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default data;
