import React, {Component} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    Redirect
} from 'react-router';
import {connect} from 'react-redux';

import {
    loadFirstQuestion
} from './actions/answers';
import Question from './components/Question';
import translation from './translation'
import {
    CaseCard
} from './cases/components'

export class Home extends Component {

    componentWillMount() {
        this.props.loadFirstQuestion()
    }

    render() {
        const { currentQuestion } = this.props;
        if(this.props.done) {
            return <Redirect to={`/qualifiedPrograms`}/>
        }

        if(currentQuestion == null) {
            return <div>{translation.t('LOADING')}</div>
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <Question current={currentQuestion}/>
                    </Col>
                </Row>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    const personAndCases = state.cases.data.find((person) => {
        return person.cases.find((c) => {
            return c.id === state.cases.ui.selectedCase;
        });
    });

    return {
        currentQuestion: state.answers.current,
        previousQuestions: state.answers.previous,
        futureQuestions: state.answers.future,
        done: state.answers.done,
        person: personAndCases
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadFirstQuestion: () => {
            dispatch(loadFirstQuestion())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
