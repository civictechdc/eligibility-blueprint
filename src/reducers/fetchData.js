import Papa from 'papaparse';
import {programs} from '../data.json';

function fetchRemoveCSV(url) {
  return fetch(url).then((response) => {
    const reader = response.body.getReader();
    return reader.read().then(({done, value}) => {
      const csvString = new TextDecoder("utf-8").decode(value);
      return csvString;
    });
  });
};

async function fetchData() {
  const url = 'https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/export?format=csv';
  const questions = await fetchRemoveCSV(url);

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

  const programReqsUrl = 'https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/export?format=csv&gid=1285635821';
  const remoteProgramReqsString = await fetchRemoveCSV(programReqsUrl);
  const programReqsArray = Papa.parse(remoteProgramReqsString, {
    header: true,
    dynamicTyping: true
  }).data;
  const programRequirementsGathered = {};
  programReqsArray.forEach((programRequirement) => {
    const programId = programRequirement.id;
    const thisRequiredQuestion = programRequirement.question.toString();
    let thisRequiredAnswer = programRequirement.value;
    const thisRequiredQuestionObject = questionsArray.find((question) => question.id.toString() === thisRequiredQuestion);
    if (thisRequiredQuestionObject.answerType === 'categorical') {
      thisRequiredAnswer = thisRequiredAnswer.split(',');
    }
    if (!programRequirementsGathered[programId]) {
      programRequirementsGathered[programId] = Object.assign({}, programRequirement, {questions: {}});
      delete programRequirementsGathered[programId]['question'];
      delete programRequirementsGathered[programId]['value'];
    }
    programRequirementsGathered[programId]['questions'][thisRequiredQuestion] = thisRequiredAnswer;
  });

  return {
    questions: questionsArray,
    programs: Object.values(programRequirementsGathered)
  };
};

export default fetchData;
