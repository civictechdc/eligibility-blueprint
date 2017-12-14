import React from 'react';
import { connect } from 'react-redux';
import {
    Row,
    Col, 
    Button
} from 'reactstrap';
import translation from 'translation';
import {
    CaseCard
} from './components';
import Loadable from '../components/Loadable';
import {
    selectCase
} from './actions';
import { push } from 'react-router-redux';

const Cases = ({results, selectedCase, handleSelect, handleBack, handleContinue }) => {
    const renderResults = () => {
        if(results.length) {
            return results.map((person) => {
                return person.cases.map((individualCase) => {
                    return (
                        <CaseCard 
                            handleSelect={handleSelect} 
                            isSelected={selectedCase === individualCase.id} 
                            {...person}  
                            {...individualCase} 
                        />
                    )
                });
            })
        }
        else {
            return (
                <p>No results found...</p>
            )
        }
    }

    return(
        <div>
            <h4>{translation.t('CASES_SEARCH_RESULTS')}</h4>
            <Row>
                <Col>
                    {renderResults()}
                </Col>
            </Row>
            <Row>
                <Col xs="6" className="align-self-start">
                    <Button onClick={handleBack} color="danger" size="sm" >{translation.t('BACK_TO_SEARCH')}</Button>
                </Col>
                <Col xs="6" className="align-self-end">
                    <Button 
                        disabled={!selectedCase ? true : false}
                        onClick={selectedCase ? handleContinue : null} 
                        color="danger" 
                        size="sm"
                    >
                        {translation.t('SELECT_CASE')}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

class CasesContainer extends React.Component {


    render() {
        const { dispatch, selectedCase } = this.props;
        return (
            <Loadable loading={this.props.isSearching} className="mx-auto" style={{width: '50px'}}>
                {() => <Cases 
                    handleBack={() => dispatch(push('/'))}
                    handleContinue={() => dispatch(push(`/cases/${selectedCase}`))}
                    handleSelect={(id) => dispatch(selectCase(id))} 
                    {...this.props} />}
            </Loadable>
        )
    }
}


function mapStateToProps(state) {
    return {
        isSearching: state.cases.ui.isSearching,
        selectedCase: state.cases.ui.selectedCase,
        results:  state.cases.data
    }
}

export default connect(mapStateToProps)(CasesContainer);