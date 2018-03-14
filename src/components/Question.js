import React from 'react';
import {
    Row,
    Col,
    Form,
    Button,
    FormGroup,
    Label,
    Input,
    Card,
    CardBlock,
    CardFooter,
    CardTitle
} from 'reactstrap';
import { connect } from "react-redux";
import * as AnswerActions from '../actions/answers'
import translation from '../translation';


export class Question extends React.Component {

    constructor(props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.questionForm = this.questionForm.bind(this);
        this.loadPreviousQuestion = this.loadPreviousQuestion.bind(this);
        this.loadFirstQuestion = this.loadFirstQuestion.bind(this);
    }

    answerQuestion(answer) {
        const { dispatch, current } = this.props;
        dispatch(AnswerActions.selectedAnswer(answer, current));
    }

    loadPreviousQuestion() {
      const { dispatch } = this.props;
      dispatch(AnswerActions.loadPreviousQuestion());
    }

    loadFirstQuestion() {
        const {dispatch} = this.props;
        dispatch(AnswerActions.loadFirstQuestion());
    }

    questionForm() {
        if (this.props.answerType === 'boolean') {
            return (
                <FormGroup tag="fieldset">
                    <Button outline color='primary' name={this.props.current} onClick={() => this.answerQuestion(true)}>{translation.t("TRUE")}</Button>{' '}
                    <Button outline color='primary' name={this.props.current} onClick={() => this.answerQuestion(false)}>{translation.t("FALSE")}</Button>{' '}
                </FormGroup>
            )
        } else if (this.props.answerType === 'categorical') {
            return <FormGroup tag="fieldset">
                {
                    this.props.answerOptions.map((answer) => {
                        return (
                            <FormGroup check key={answer}>
                                <Label check>
                                <Input type="radio" checked={this.props.currentResponse === false} name={this.props.current} onClick={() => this.answerQuestion(answer)} />
                                {' ' + translation.t(answer)}
                                </Label>
                            </FormGroup>
                        );
                    })
                }
            </FormGroup>
        }
    }
    render() {
        return (
            <Row className="mt-2">
                <Col md={{ size: 8, push: 1, pull: 1, offset: 1 }} sm="12">
                    <Card>
                        <CardBlock>
                            <CardTitle>{translation.t(this.props.text)}</CardTitle>
                        </CardBlock>
                        <Form className="mr-3" className="text-center">
                            {this.questionForm()}
                        </Form>
                        <CardFooter>
                            <Button className="float-right" size="sm" color='danger' onClick={() => this.loadFirstQuestion()}>Start Over</Button>{' '}
                            <Button className="float-left" size="sm" color='warning' onClick={() => this.loadPreviousQuestion()}>Go back</Button>{' '}
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state, props) {
  const theQuestion = state.data.questions.find(question => question.id === props.current);

  return {
    text: theQuestion.question,
    answerType: theQuestion.answerType,
    answer: theQuestion.answer,
    answerOptions: theQuestion.answerOptions,
    currentResponse: state.answers.responses[props.current]
  };
}

export default connect(mapStateToProps)(Question);
