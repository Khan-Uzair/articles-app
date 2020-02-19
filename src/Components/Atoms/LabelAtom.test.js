import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LabelAtom from './LabelAtom';

configure({ adapter: new Adapter() });

describe(`<LabelAtom />`, () => {
   it('should render one label atom', () => {
       const value = shallow(<LabelAtom labelName="Test label"/>).text();
       expect(value).toEqual('Test label');
   });
});