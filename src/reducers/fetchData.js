import Papa from 'papaparse';

async function fetchData() {
  const url = 'https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/export?format=csv';
  const questions = await fetch(url).then((response) => {
    const reader = response.body.getReader();
    return reader.read().then(({done, value}) => {
      const csvString = new TextDecoder("utf-8").decode(value);
      return csvString;
    });
  });

  var questionsArray = Papa.parse(questions, {
    header: true,
    dynamicTyping: true
  }).data;

  questionsArray.map((question) => {
    var questionContinueRules = question.continueRules.split(",");
    question.continueRules = {
      "true": [questionContinueRules[0]],
      "false": [questionContinueRules[1]]
    }
  });

  // const programsUrl = 'https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/export?format=csv&gid=1285635821';
  // const programs = Papa.parse(programsUrl, {download: true, header: true});
  // console.log(programs);

  return {questions: questionsArray};
};

export default fetchData;
