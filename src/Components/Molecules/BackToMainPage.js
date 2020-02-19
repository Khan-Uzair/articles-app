import React, { Component } from 'react';
import ButtonAtom from '../Atoms/ButtonAtom';

class BackToMainPageMolecule extends Component {

    backToMainPageHandler = () => {
        this.props.history.push("/");
    }
    
    render() {
        return (
            <div className="row back-to-main">
                <ButtonAtom buttonHandller={this.backToMainPageHandler}>Back</ButtonAtom>
            </div>
        );
    }
}

export default BackToMainPageMolecule;