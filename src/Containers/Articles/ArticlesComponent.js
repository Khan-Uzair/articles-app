import React from 'react';

import './ArticlesComponent.scss';
import TableTemplate from '../../Components/Templates /TableTemplate';

const ArticlesComponent = (props) => {
    return (
        <div className="col-md-12">
            {props.articles.articlesArr?.length > 0 && (
                 <TableTemplate 
                    tableHeaders={props.headers}
                    tableRows={props.articles.articlesArr}
                    onAction={props.onAction}
                    >
                </TableTemplate>
            )}
        </div>
        
    );
}

export default ArticlesComponent;