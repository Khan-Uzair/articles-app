import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IconAtom from './IconAtom';

configure({ adapter: new Adapter() });

describe('<IconAtom />', () => {
   it('should render one label atom', () => {
       const wrapper = shallow(<IconAtom />);
       expect(wrapper.find('img')).toHaveLength(1);
   });
});