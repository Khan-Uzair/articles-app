import React from 'react';

import './DetailsTemplate.scss';

const DetailsTemplate = (props) => (
    <div className="row">
        {props.formHeaders.map(header => {
        return (
                <div className="col-md-12">
                    <div className="details-cell">
                        <label>{header}</label>
                        <h6>{props.detailsObj[header].value}</h6>
                    </div>
                </div>
            )
        })}
    </div>
);

export default DetailsTemplate;