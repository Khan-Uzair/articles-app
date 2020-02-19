import React, { Component } from 'react';
import { connect } from "react-redux";
import FormTemplate from '../../../Components/Templates /FormTemplate';

import { update_article } from "../../../Actions/ApiActions";
import BackToMainPageMolecule from '../../../Components/Molecules/BackToMainPage';
import toastr from 'toastr';
import CommonServices from '../../../Services/CommonService';
import LabelAtom from '../../../Components/Atoms/LabelAtom';


class ArticleEditContainer extends Component {
    state = {
        articleForm: null,
        isFormValid: true,
    }

    static getDerivedStateFromProps = (props, state) => {
        const seletedArticleId = props.data.selectedArticle;
        const form = props.data.articlesArr
                                .find((item) => (item.id === seletedArticleId));
        const fromHeaders = props.data.formHeaders;
        let articleForm = {};
        for(let item in form) {
            const isFormHeader = fromHeaders.includes(item);
            if(isFormHeader) articleForm[item] = form[item];
        }
        if(!state.articleForm) {
            return {
                articleForm,
              };
        } 
        
    }

    saveArticlehandler = async (event, updatedForm) => {
        const isFormValid = CommonServices.isFormValid(updatedForm);
        if(!isFormValid) {
            return this.setState({
                articleForm: updatedForm,
                isFormValid: false
            });
        }
        updatedForm["Actions"] = ["edit", "delete", "details"];
        const response = await this.props.dispatch(update_article({
            articleId: this.props.data.selectedArticle, 
            formData: updatedForm
        }));
        if(response) {
            toastr.success('Edited successfully');
            this.props.history.push("/");
        } else {
            toastr.error('Edit failed');
        } 
    }

    render() {
        const { articleForm, isFormValid } = this.state;
        return(
            <>  
                <div className="row">
                    <div className="col-md-12 articles-label">
                        <LabelAtom className="col-md-12" 
                            labelName="Edit article" labelSize="'small'" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 edit-container">
                        <FormTemplate 
                            inputChanged={this.formInputChangeHandler}
                            saveForm={this.saveArticlehandler} 
                            formTemplateConfig={articleForm}
                            isFormValid={isFormValid}>
                        </FormTemplate>
                        <BackToMainPageMolecule {...this.props} />
                    </div>
                </div>
            </>
            
        );
    }
}

const mapStateToProps = state => {
    return {
      data: state
    };
};

export default connect(mapStateToProps)(ArticleEditContainer);