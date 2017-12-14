import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { QualifiedPrograms } from '../QualifiedPrograms';

describe("Qualified Programs container", () => {
  let wrapper
  const answers = [];
  let dispatch = () => {return null}
  beforeEach(()=>{
    wrapper = shallow(<QualifiedPrograms answers={answers} dispatch={dispatch} />)
  })
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
})