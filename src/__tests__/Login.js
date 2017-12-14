import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Login } from '../Login';

const props = {
    location: {}
}

describe("Linkbar Component", () => {
  let wrapper
  beforeEach(()=>{
      wrapper = shallow(<Login {...props} />)
  })
  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1)
  });
})