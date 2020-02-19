import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from 'react-bootstrap';
import ButtonAtom from './ButtonAtom';

configure({ adapter: new Adapter() });

describe('<ButtonAtom />', () => {
   it('should render one label atom', () => {
       const wrapper = shallow(<ButtonAtom />);
       expect(wrapper.find(Button)).toHaveLength(1);
   });
});