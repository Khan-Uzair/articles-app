import React from 'react';


const LabelAtom = (props) => {
    return(
        <div>
            {props.labelSize === 'big' ? <h2>{props.labelName}</h2> : 
                props.labelSize === 'medium' ? <h3>{props.labelName}</h3> :
                <h4>{props.labelName}</h4>}
        </div>
    );
}

export default LabelAtom;