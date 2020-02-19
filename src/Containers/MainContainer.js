import React, { Component } from 'react';
import './MainContainer.scss';

import LabelAtom from '../Components/Atoms/LabelAtom';
import ButtonAtom from '../Components/Atoms/ButtonAtom';
import ArticlesContainer from './Articles/ArticlesContainer';

import { Route,Link } from 'react-router-dom';
import ArticlesFormContainer from './Articles/ArticlesForm/ArticlesFormContainer';
import ArticleEditContainer from './Articles/ArticlesForm/ArticleEditContainer';
import ArticleDetailsContainer from './Articles/ArticlesForm/ArticleDetailsContainer';

class MainContainer extends Component {
    render() {
        return(
            <>
                <div className="main-container">
                    <div className="articles-container">
                        <div className="row">
                            <div className="col-md-12 articles-label">
                                <LabelAtom labelName="Articles" labelSize="'small'" />
                                <div>
                                    <ButtonAtom>
                                        <Link to="/create-article">
                                            Create Article
                                        </Link>
                                    </ButtonAtom>
                                </div>
                            </div>
                        </div>
                        <Route path="/" exact component={ArticlesContainer}></Route>
                        <Route path="/create-article" exact component={ArticlesFormContainer}></Route>
                        <Route path="/edit-article" component={ArticleEditContainer}></Route>
                        <Route path="/article-details" component={ArticleDetailsContainer}></Route>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default MainContainer;