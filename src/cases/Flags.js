import React from 'react';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { push } from 'react-router-redux';
import translation from 'translation';


const Flags = ({flags, handleGoToQuestions, handleBackToCase}) => {
    return (
        <Row>
            <Col>
                <h4>Flags</h4>
                <ListGroup className="mb-3">
                    {
                        flags.map((flag) => {
                           return <ListGroupItem><span className="material-icons text-danger mr-1"><i class="material-icons">error_outline</i></span> {flag.description}</ListGroupItem>
                        })
                    }
                </ListGroup>
                <Row>
                    <Col xs="6" className="align-self-start">
                        <Button onClick={handleBackToCase} color="danger" size="sm" >{translation.t('BACK_TO_CASE')}</Button>
                    </Col>
                    <Col xs="6" className="align-self-end">
                        <Button onClick={handleGoToQuestions} color="danger" size="sm">{translation.t('GO_TO_QUESTIONS')}</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

class FlagsContainer extends React.Component {

    render() {
        const { dispatch, selectedCase } = this.props;
        return <Flags
            handleBackToCase={() => dispatch(push(`/cases/${selectedCase}`))}
            handleGoToQuestions={() => dispatch(push(`/questions/${selectedCase}/1`))}
            {...this.props}
        />
    }
}

function mapStateToProps(state) {
    const personAndFlags = state.cases.data.find((person) => {
        return person.cases.find((c) => {
            return c.id === state.cases.ui.selectedCase;
        });
    });

    return {
       person: personAndFlags,
       flags: personAndFlags.flags,
       selectedCase: state.cases.ui.selectedCase
    }
}

export default connect(mapStateToProps)(FlagsContainer);
