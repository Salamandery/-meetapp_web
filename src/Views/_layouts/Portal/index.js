import React from 'react';
import ProtoTypes from 'prop-types';
import {
    Container,
} from './style';
import Header from '../../../Components/Header';
const Portal = ({children}) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}

Portal.propTypes = {
    children: ProtoTypes.element.isRequired
}

export default Portal;