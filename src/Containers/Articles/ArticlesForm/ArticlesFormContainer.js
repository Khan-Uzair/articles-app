import React, { Component } from 'react';
import { connect } from "react-redux";

import FormTemplate from '../../../Components/Templates /FormTemplate';
import LabelAtom from '../../../Components/Atoms/LabelAtom';
import { create_article } from "../../../Actions/ApiActions";
import BackToMainPageMolecule from '../../../Components/Molecules/BackToMainPage';
import toastr from 'toastr';
import CommonServices from '../../../Services/CommonService';


class ArticlesFormContainer extends Component {
    state = {
        isFormValid: true,
        articleForm: {
            Title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter title'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: "3",
                    maxLength: "30"
                },
                valid: false,
            },
            Description: {
                elementType: 'input',
                elementConfig: {
                    type: 'textArea',
                    placeholder: 'Enter description'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: "3",
                    maxLength: "250"
                },
                valid: false,
            },
            Author: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Enter author's name"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
            }
        }
    };

    saveArticlehandler = async (event, updatedForm) => {
        const isFormValid = CommonServices.isFormValid(updatedForm);
        if(!isFormValid) {
            return this.setState({
                articleForm: updatedForm,
                isFormValid: false
            });
        }
        updatedForm["Actions"] = ["edit", "delete", "details"];
        const response = await this.props.dispatch(create_article(updatedForm));
        if(response) {
            toastr.success('Created successfully');
            this.props.history.push("/");
        } else {
            toastr.error('Creation of article failed.');
        }
    }

    backToMainPageHandler = () => {
        this.props.history.push("/");
    }

    render() {
        const { isFormValid } = this.state;

        return(
            <>
                <div className="row">
                    <div className="col-md-12 articles-label">
                        <LabelAtom className="col-md-12" 
                            labelName="Create article" labelSize="'small'" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <FormTemplate
                            saveForm={this.saveArticlehandler}
                            formTemplateConfig={this.state.articleForm}
                            isFormValid={isFormValid}>
                        </FormTemplate>
                        <BackToMainPageMolecule {...this.props}/>
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

export default connect(mapStateToProps)(ArticlesFormContainer);
