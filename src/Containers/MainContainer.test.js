import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainContainer from './MainContainer';
import LabelAtom from '../Components/Atoms/LabelAtom';
import ButtonAtom from '../Components/Atoms/ButtonAtom';


configure({ adapter: new Adapter() });

describe('<MainContainer />', () => {
   it('should render one label atom', () => {
       const wrapper = shallow(<MainContainer />);
       expect(wrapper.find(LabelAtom)).toHaveLength(1);
   });

//    it('should test if two or more label atoms exists', () => {
//         const wrapper = shallow(<MainContainer />);
//         expect(wrapper.find(LabelAtom)).toHaveLength(2);
//     });

    it('should render one button atom', () => {
        const wrapper = shallow(<MainContainer />);
        expect(wrapper.find(ButtonAtom)).toHaveLength(1);
    });
});