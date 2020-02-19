import React from 'react';

import './TextInputAtom.scss';

const TextInputAtom = (props) => {
    let elementType = '';
    switch(props.elementConfig?.type) {
        case 'text':
            elementType = (
                <input {...props.elementConfig}
                type={props.elementType} 
                className="form-control" value={props.value} 
                onChange={props.inputChanged} 
                minLength={props.validation.minLength}
                maxLength={props.validation.maxLength} />);
            break;
        case 'textArea': 
                elementType = (
                    <textarea {...props.elementConfig}
                    type={props.elementType} 
                    className="form-control" value={props.value} 
                    onChange={props.inputChanged} 
                    minLength={props.validation.minLength}
                    maxLength={props.validation.maxLength} />
                );
                break;
        default: elementType = null;
    }
    if(elementType) {
        return (
         
            <div className="text-input">
                {elementType}
                {(!props.isFormValid && !props.valid) ? 
                    <span className="err-msg">Please enter valid values</span> : null}
            </div>
        )
    }
    return null;
};

export default TextInputAtom;