import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import About from '../About'


describe("About component", () => {
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<About />)
    })
    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1)
    });
})