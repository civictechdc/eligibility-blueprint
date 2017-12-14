import React from 'react';
import PropTypes from 'prop-types';
import translation from 'translation';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import './Login.css';
import * as actions from './actions/authActions';
import imgLogo from './images/cfsa-logo.jpg';

export const Login = props => {
  const {
    userInput,
    isAuthenticated,
    isPending,
    errorMessage,
    updateLoginForm,
    login,
  } = props;
  
  const redirectPath = '/';

  const onChange = e => {
    e.preventDefault();
    updateLoginForm(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    login(userInput, redirectPath);
  }

  const renderPending = () => (
    <Container>
      <Row>
        <Col xs={4} />
        <Col xs={4}>
          <div className="pending-spinner" />
        </Col>
        <Col xs={4} />
      </Row>
    </Container>
  );

  const renderLogin = () => (
    <div>
      <Row>
        <Col xs={1} md={3}></Col>
        <Col xs={10} md={6}>
          <img className="login-logo" src={imgLogo} alt="CFSA Logo" />
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1>Login</h1>
          <p>
            This application is to assist in the identification of relevant programs for
            vulnerable familes. Please login using your Social Worker ID.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form onSubmit={onSubmit}>
            <FormGroup>
            <Label for="userId">Enter Your ID</Label>
            <Input
              type="password"
              name="userId"
              id="userId"
              placeholder="eg. 07734..."
              value={userInput}
              onChange={onChange}
            />
            </FormGroup>
          <Button color="danger">{translation.t('LOGIN')}</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );

  return isPending ? renderPending() : renderLogin();
}

Login.propTypes = {
  userInput: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  updateLoginForm: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  userInput: state.auth.userInput,
  isAuthenticated: state.auth.isAuthenticated,
  isPending: state.auth.isPending,
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps, actions)(Login);
