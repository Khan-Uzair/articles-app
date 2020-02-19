import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetch_articles, delete_article } from "../../Actions/ApiActions";
import { selected_article } from '../../Actions/StoreActions';
import ArticlesComponent from "./ArticlesComponent";

import toastr from 'toastr';
import LoaderComponent from '../../Components/Loader/LoaderComponent';

class ArticlesContainer extends Component {
    state = {
        headers: [
		    "Title",
		    "Description",
		    "Author",
		    "Actions"
		  ]
    }
    componentDidMount = () => {
        this.loadArticles();
    }

    loadArticles = async () => {
        await this.props.dispatch(fetch_articles());
    }

    deleteArticleHandler = async (row) => {
        const response= await this.props.dispatch(delete_article(row.id));
        if(!response) {
            toastr.error('Delete error');
        } else {
            toastr.success('Delete success');
            this.loadArticles();
        }
    }

    editArticleHandler = (row) => {
        this.props.dispatch(selected_article(row.id));
        this.props.history.push("/edit-article");
    }

    articleDetailshandler = (row) => {
        this.props.dispatch(selected_article(row.id));
        this.props.history.push("/article-details");
    }

    onActionHandler = (event, action) => {
        switch(action.type) {
            case 'edit': 
                this.editArticleHandler(action.data);
                break;
            case 'delete':
                this.deleteArticleHandler(action.data);
                break; 
            case 'details':
                this.articleDetailshandler(action.data);
                break;
            default: ;
        }
    }

    render() {
        const { data } = this.props;
        return(
            <>
                {data.isLoading ? <LoaderComponent /> : null}
                <ArticlesComponent 
                    headers={this.state.headers} 
                    articles={this.props.data}
                    onAction={this.onActionHandler}>
                </ArticlesComponent>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
      data: state
    };
};

export default connect(mapStateToProps)(ArticlesContainer);
