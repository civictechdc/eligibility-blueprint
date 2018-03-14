# Eligibility Blueprint

Demo here: [https://kind-spence-14935a.netlify.com](https://kind-spence-14935a.netlify.com/)

Eligibility blueprint is an application for bootstrapping a "decision-tree" webform which asks users to answer a set of questions. Then, based on the answers to those questions, delivers a set of results.

Eligibilty Primitives:

* questions
* answers
* results
* decision tree (or "eligibility workflow")

An eligibility workflow is the set of relationships between questions and answers (which answers should lead to which questions) and the set of answers required to be considered eligible. For CFSA, results were a set of programs but they could just as easily be a single eligibility result or something else we haven't thought of. The functionality may serve any problem where a set of answers to a set of questions can be used to determine a set of results.

## How to use

The eligibility blueprint is a project that came out of [DC's Child and Family Services Agency (CFSA) Referral Prototype](https://github.com/codefordc/cfsa-referral). The current set of questions and programs referenced in the **Getting Started** section below have been defined by CFSA. All that's required to create a new eligibility workflow is to define your own set of questions, programs and a decision tree.

Once this data is defined for the given use case, users should create a spreadsheet that is structured like the one created for [CFSA](https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/edit#gid=0).

## Getting started 

* install node.js
* Install [nvm](https://github.com/creationix/nvm#install-script)

```
# Clone this repository
$ git clone git@github.com:codefordc/eligibility-blueprint.git

# Go into the repository
$ cd eligibility-blueprint 

# Use the right version of node
$ nvm install

# Install dependencies
$ yarn install

# Run Tests
$ yarn test

# Run the app
$ yarn start
```

## Configuration

Questions and programs data is configured via CSVs identified in [`.env`](./.env).

There are 2 CSVs which should be referenced.

### 1. The Questions CSV

`REACT_APP_QUESTIONS_CSV` should point to a CSV with the following columns and values:

* `id`: A question identifier, example: `1`.
* `question`: Question, example: "How many people live in your household?"
* `start`: Boolean, `true` or `false`. There should only be one question for which this value is `true`.
* `questionType`: 'boolean' for true / false ("yes" / "no") questions or 'categorical' for questions with multiple options (e.g. "toast", "bagel", "english muffin").
* `continueRules`: Comma-separated ids of the next question to ask, dependent on the answer. In the case that the answer type is boolean, the first value identifies the next question to ask when the response is `true` and the second the identifier of the next question when the response is `false`.

### 2. The Program Eligibity Requirements CSV

`REACT_APP_PROGRAMS_CSV` should point to a CSV wit the following columns and values:

* `id`: A program eligibility requirement identifier.
* `program`: Human-readable program name.
* `question`: A comma-separated list of question ids where a response is required to determine eligibility.
* `value`: A comma-separated list of answer values to map to questions from the `question` column.

Each row in the programs CSV is a set of _program eligibility requirements_, not a program definition itself. A single program could be associated with multiple sets of program eligibility requirements. For example, with housing assistance, a person is eligible for assistance if they have a household size of 2 and income below $20,575 _or_ they have a household size of 3 and income below $25,975.

### CSV Examples

* [DC's Child and Family Services Agency Programs (CFSA)](https://docs.google.com/spreadsheets/d/1nI45sZOZ6Qg2JUuQIjWk6OHl353dcvV7_7p-NcYaMBg/edit#gid=0)
* [DC's Emergency Rental Assistance Program (ERAP)](https://docs.google.com/spreadsheets/d/1D_vfpMVubJYvBSRRpUz--iCf7-aFCztbxvp7fHhihFo/edit#gid=1368381262)

## Technology

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

