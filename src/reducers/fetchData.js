import Papa from 'papaparse';

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
  const url = process.env.REACT_APP_QUESTIONS_CSV;
  if (!url) throw new Error(
    'No REACT_APP_QUESTIONS_CSV set. Please start the server after setting a REACT_APP_QUESTIONS_CSV environment variable.'
  );
  const questions = await fetchRemoveCSV(url);

  var questionsArray = Papa.parse(questions, {
    header: true,
    dynamicTyping: true
  }).data;

  questionsArray.forEach((question) => {
    var questionContinueRules = question.continueRules.split(",");
    question.continueRules = {
      "true": [parseInt(questionContinueRules[0], 10)], // '10' is the radix argument: "the base of a system of numeration."
      "false": [parseInt(questionContinueRules[1], 10)]
    };
    // for categoricals
    if (question.answerOptions) {
      question.answerOptions = question.answerOptions.split(",");
    }
  });

  const programReqsUrl = process.env.REACT_APP_PROGRAMS_CSV;
  if (!programReqsUrl) throw new Error(
    'No REACT_APP_PROGRAMS_CSV set. Please start the server after setting a REACT_APP_PROGRAMS_CSV environment variable.'
  );
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
