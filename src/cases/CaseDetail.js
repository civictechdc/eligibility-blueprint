import React from 'react';
import { connect } from 'react-redux';
import CaseCard from './components/CaseCard';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import translation from 'translation';
import { push } from 'react-router-redux';

const CaseDetail = ({ selectedCase, person, handleBackToResults, handleSeeFlags }) => {
    return (
        <Row>
            <Col>
                <h4>Case ID: {selectedCase.id}</h4>
                <Row>
                    <Col xs="12">
                        <p className="text-muted">{translation.t('NAME')}</p>
                        <p>{person.firstName} {person.lastName}</p>
                    </Col>
                    <Col xs="12">
                        <p className="text-muted">{translation.t('DOB')}</p>
                        <p>{person.dateOfBirth}</p>
                    </Col>
                    <Col xs="12">
                        <p className="text-muted">{translation.t('SOCIAL_WORKER_ID')}</p>
                        <p>{selectedCase.socialWorkerId}</p>
                    </Col>
                    <Col xs="12">
                        <p className="text-muted">{translation.t('SUPERVISOR_ID')}</p>
                        <p>{selectedCase.supervisorId}</p>
                    </Col>
                    <Col xs="12">
                        <p className="text-muted">{translation.t('REFERRAL_ID')}</p>
                        <p>{selectedCase.referralId}</p>
                    </Col>
                    <Col xs="12">
                        <p className="text-muted">{translation.t('REFERRAL_DATE')}</p>
                        <p>{selectedCase.referralDate}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" className="align-self-start">
                        <Button onClick={handleBackToResults} color="danger" size="sm" >{translation.t('BACK_TO_SEARCH_RESULTS')}</Button>
                    </Col>
                    <Col xs="6" className="align-self-end">
                        <Button onClick={handleSeeFlags} color="danger" size="sm" >{translation.t('SEE_CASE_FLAGS')}</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


class CaseDetailContainer extends React.Component {

    render() {
        const { dispatch, selectedCase } = this.props;
        return (
            <CaseDetail
                handleBackToResults={() => dispatch(push('/cases'))}
                handleSeeFlags={() => dispatch(push(`/flags/${selectedCase.id}`))}
                {...this.props}
            />
        );
    }
}

function mapStateToProps(state) {
    const personAndCases = state.cases.data.find((person) => {
        return person.cases.find((c) => {
            return c.id === state.cases.ui.selectedCase;
        });
    });

    return {
        person: personAndCases,
        selectedCase: personAndCases.cases.find((c) => c.id === state.cases.ui.selectedCase)
    }
}



export default connect(mapStateToProps)(CaseDetailContainer);
