import React from 'react';
import ButtonAtom from '../Atoms/ButtonAtom';

import './TableTemplate.scss';

const TableTemplate = (props) => {
    debugger;
    return (<table>
        <thead>
            <tr>
                {props.tableHeaders.map((item) => (
                    <th key={`${item}-header`}>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
                {props.tableRows.map(rowData => (
                    <tr key={rowData.id}>
                        {props.tableHeaders.map(cellKey => {
                            let cellData = '';
                            cellData = cellKey !== 'Actions' ? 
                                    <td key={cellKey}>{rowData[cellKey].value}</td>: 
                                    <td className="action-btns" key={cellKey}>{rowData[cellKey].map(item => (
                                        <ButtonAtom 
                                            key={item}
                                            buttonHandller={(event) => props.onAction(event, {type: item, data: rowData})}>
                                            {item}
                                        </ButtonAtom>
                                    )) }</td>;
                            return cellData;    
                        })}
                    </tr>
                ))}
        </tbody>
    </table>)
};

export default TableTemplate;

