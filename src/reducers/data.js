import initial from '../data.json';
import cases from '../case.json';


const mockData = {
    ...initial,
    cases
};

const data = async function(state = mockData, action) {
  const url = 'https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/export?format=csv';
  const questions = await fetch(url).then((response) => {
    const reader = response.body.getReader();
    return reader.read().then(({done, value}) => {
      const csvString = new TextDecoder("utf-8").decode(value);
      return csvString;
    });
  });
  console.log(questions);

    switch(action.type) {
        default:
            return state;
    }
}

export default data;
