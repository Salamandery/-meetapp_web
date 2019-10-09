import React from 'react';
import ProtoTypes from 'prop-types';
import {
    Container,
} from './style';

const Default = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

Default.propTypes = {
    children: ProtoTypes.element.isRequired
}

export default Default;