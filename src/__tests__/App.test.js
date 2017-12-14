import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe("App Container", () => {
  let wrapper
  beforeEach(()=>{
      wrapper = shallow(<App />)
  })
  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1)
  });
})
