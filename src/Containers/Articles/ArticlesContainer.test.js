import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import ArticlesContainer from './ArticlesContainer';

const mockStore = configureMockStore();
const store = mockStore({});
configure({ adapter: new Adapter() })

describe('<ArticleContainer />',()=>{
    it('should render one ArticlesComponent',()=>{
        const articleContainerElement = shallow((
            <Provider store={store}>
                <ArticlesContainer />
            </Provider>));
            expect(articleContainerElement).toMatchSnapshot();
    });
});