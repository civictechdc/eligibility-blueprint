import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {Container, Row, Col} from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import history from './history';
import createHistory from 'history/createBrowserHistory';

import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import SearchCases from './cases/SearchCases';
import Cases from './cases/Cases';
import CaseDetail from './cases/CaseDetail';
import Flags from './cases/Flags';
import About from './About';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Contact from './Contact';
import Linkbar from './Linkbar';
import QualifiedPrograms from './QualifiedPrograms';

import answers from './reducers/answers';
import data from './reducers/data';
import auth from './reducers/auth';
import eligiblePrograms from './reducers/eligiblePrograms';
import cases from './cases/reducers';

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const mWare = process.env.NODE_ENV === 'development' ?  applyMiddleware(middleware, thunk, logger) : applyMiddleware(middleware, thunk)
// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    answers,
    auth,
    data,
    eligiblePrograms,
    routing: routerReducer,
    form: formReducer,
    cases
  }),
  mWare
)

const App = () => {
  return (
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Linkbar history={history}/>
          <Row>
            <Col xs={0} md={3} />
            <Col xs={12} md={6}>
              <Switch>
                <PrivateRoute exact path="/" component={SearchCases}/>
                <PrivateRoute exact path="/cases" component={Cases}></PrivateRoute>
                <PrivateRoute exact path="/cases/:selectedCase" component={CaseDetail}></PrivateRoute>
                <PrivateRoute exact path="/flags/:selectedCase" component={Flags}></PrivateRoute>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <PrivateRoute path="/questions/:selectedCase/:question" component={Home}></PrivateRoute>
                <PrivateRoute path="/qualifiedprograms/:selectedCase" component={QualifiedPrograms} />
                <Redirect to="/" />
              </Switch>
            </Col>
            <Col xs={0} md={3} />
          </Row>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
