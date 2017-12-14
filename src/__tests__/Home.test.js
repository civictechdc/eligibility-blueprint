import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Home } from '../Home';

describe("Home component", () => {
  let wrapper
  const loadFirstQuestion = sinon.spy();
  beforeEach(()=>{
    wrapper = shallow(<Home loadFirstQuestion={loadFirstQuestion} />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
})