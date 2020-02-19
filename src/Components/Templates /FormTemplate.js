 import React, { Component } from 'react';
import TextInputAtom from '../Atoms/TextInputAtom';
import ButtonAtom from '../Atoms/ButtonAtom';

import './FormTemplate.scss';

class FormTemplate extends Component {
    state = {
        formData: {}
    }

    componentDidMount = () => {
        let formData = {...this.props.formTemplateConfig};
        this.setState({
            formData
        });
    }

    formatFormData = () => {
        const formHeaders = this.props.formHeaders ? this.props.formHeaders : null;
        let formElements = [];
        const { formData } = this.state;
        for(let key in formData) {
            if(!formHeaders) {
                formElements.push({
                    id: key,
                    config: formData[key]
                });
            } else {
                if(formHeaders.indexOf(key) > -1) {
                    formElements.push({
                        id: key,
                        config: formData[key]
                    });
                }
            }    
        }
        return formElements;
    }

    formInputChangeHandler = (event, formInput) => {
        const { formData } = this.state;
        const inputValue = event.target.value;
        formData[formInput].value = inputValue;
        formData[formInput].valid = this.checkValidity(inputValue, formData[formInput].validation);

        this.setState({
            formData
        });
    }

    checkValidity = (value, rules) => {
        let isValid = false;
        if(rules.required) {
            isValid = value.trim() !== "";
        }
        return isValid;
    }

    render() {
        const { formData } = this.state;
        let formElements = this.formatFormData();
        return (
            <div className="form-container">
                <form>
                    {formElements.length > 0 && formElements.map(el => {
                        return <TextInputAtom 
                            {...el.config}
                            key={el.id}
                            isFormValid={this.props.isFormValid}
                            inputChanged={(event) => this.formInputChangeHandler(event, el.id)} />
                    })}
                    {!this.props.isFormValid ? <span className="err-msg">Form has invalid values</span> : null}
                    <div className="row d-flex justify-content-end">
                        <ButtonAtom buttonHandller={(event) => this.props.saveForm(event, formData)}>
                            Save
                        </ButtonAtom>
                    </div>
                </form>
            </div>
        )
    };
}

export default FormTemplate;