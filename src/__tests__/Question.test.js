import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Question } from '../components/Question';

describe("Qualified Programs container", () => {
  let wrapper
  const answers = [];
  let dispatch = () => {return null}
  beforeEach(()=>{
    wrapper = shallow(<Question dispatch={dispatch} text={"WARD"} />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
})