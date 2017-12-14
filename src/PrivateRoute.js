import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route 
    {...rest} 
    render={props => (
      isAuthenticated
        ? <Component {...props}/>
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
    )}
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);