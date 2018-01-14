import Papa from 'papaparse';
import {programs} from '../data.json';

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
      "true": [parseInt(questionContinueRules[0])],
      "false": [parseInt(questionContinueRules[1])]
    };
    // for categoricals
    if (question.answerOptions) {
      question.answerOptions = question.answerOptions.split(",");
    }
  });

  // const programsUrl = 'https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/export?format=csv&gid=1285635821';
  // const programs = Papa.parse(programsUrl, {download: true, header: true});

  return {
    questions: questionsArray,
    programs: programs
  };
};

export default fetchData;
