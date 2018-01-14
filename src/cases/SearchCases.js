import React from 'react';
import {connect} from 'react-redux';
import {
    Row,
    Col,
    Form,
    Input,
    FormGroup,
    FormText,
    Label,
    Button
} from 'reactstrap'
import { Field, reduxForm } from 'redux-form';
import {
    searchCases
} from './actions';
import { push } from 'react-router-redux';

import translation from '../translation';

const validate = values => {
  const errors = {}
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>
)

const InputField = (props) => {
    return (
        <Input type={props.type} {...props.input} />
    )
}

const SearchCases = ({handleSubmit, onSubmit}) => {
    return (
      <div>
        <h4>{translation.t('OPEN_CASE_HEADER')}</h4>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <legend>
                {translation.t('SEARCH_HELP_TEXT')}
            </legend>
            <FormGroup className="mb-3">
                <Label htmlFor="lastName">{translation.t('LAST_NAME_INPUT')}</Label>
                <Field name="lastName" component={InputField} type="text" />
                <FormText color="muted">{translation.t('LAST_NAME_HELP')}</FormText>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="dateOfBirth">{translation.t('DATE_OF_BIRTH_INPUT')}</Label>
                <Field name="dateOfBirth" component={InputField} type="date" />
                <FormText color="muted">{translation.t('DOB_HELP')}</FormText>
            </FormGroup>
            <Button className="mb-3" color="danger" size="sm" >{translation.t('SUBMIT_SEARCH_BUTTON')}</Button>
        </Form>
      </div>
    )
}

class SearchCasesContainer extends React.Component {

    constructor() {
        super();
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(values) {
        const { dispatch } = this.props;
        dispatch(searchCases(values));
        dispatch(push('/cases'))
    }

    render() {
        return (
            <SearchCases {...this.props}
            onSubmit={this.handleSearchSubmit} />
        )
    }
}


export default reduxForm({
  // a unique name for the form
  form: 'search',
  validate
})(SearchCasesContainer);
