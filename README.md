# Eligibility Blueprint

Demo here: [https://eligibility-blueprint.herokuapp.com/](https://eligibility-blueprint.herokuapp.com/)

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

## Technology

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

