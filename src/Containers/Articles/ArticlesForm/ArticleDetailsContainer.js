import React, { Component } from 'react';
import { connect } from "react-redux";
import DetailsTemplate from '../../../Components/Templates /DetailsTemplate';
import BackToMainPageMolecule from '../../../Components/Molecules/BackToMainPage';
import LabelAtom from '../../../Components/Atoms/LabelAtom';

class ArticleDetailsContainer extends Component {

    backToMainPageHandler = () => {
        this.props.history.push("/");
    }

    render() {
        const { data } = this.props;
        const detailsObj = data.articlesArr.find(row => (
            row.id === data.selectedArticle
        ));

        return (
            <>
                <div className="row">
                    <div className="col-md-12 articles-label">
                        <LabelAtom className="col-md-12" 
                            labelName="Article details" labelSize="'small'" />
                    </div>
                </div>
                <DetailsTemplate 
                    formHeaders={data.formHeaders} 
                    detailsObj={detailsObj} />
                <BackToMainPageMolecule {...this.props} />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
      data: state
    };
};

export default connect(mapStateToProps)(ArticleDetailsContainer);