import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Linkbar from '../Linkbar';

describe("Linkbar Component", () => {
  let wrapper
  beforeEach(()=>{
      wrapper = shallow(<Linkbar />)
  })
  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1)
  });
})