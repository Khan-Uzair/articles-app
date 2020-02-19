import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextInputAtom from './TextInputAtom';

configure({ adapter: new Adapter() });

describe('<TextInputAtom />', () => {
   it('should render one input element from InputAtom', () => {
       const wrapper = shallow(<TextInputAtom 
                                    elementConfig={{type: 'text'}} 
                                    validation={{
                                        minLength: "3",
                                        maxLength: "30"
                                    }} />) ;
       expect(wrapper.find('input')).toHaveLength(1);
   });

   it('should render one text area element from InputAtom', () => {
    const wrapper = shallow(<TextInputAtom 
                                 elementConfig={{type: 'textArea'}} 
                                 validation={{
                                     minLength: "3",
                                     maxLength: "250"
                                 }} />) ;
    expect(wrapper.find('textarea')).toHaveLength(1);
});
});