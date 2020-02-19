import React from 'react';

import { Button } from 'react-bootstrap';
import './ButtonAtom.scss';

const ButtonAtom = (props) => (
    <Button onClick={props.buttonHandller}>{props.children}</Button>
);

export default ButtonAtom;