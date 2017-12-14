import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe("Contact Component", () => {
  let wrapper
  beforeEach(()=>{
      wrapper = shallow(<Contact />)
  })
  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1)
  });
})