import React from 'react';
import PropType from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function Router({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    } 

    if (signed && !isPrivate) {
        return <Redirect to="/Dashboard" />
    }

    return <Route 
        {...rest}
        component={Component}

    />

}

Router.propTypes = {
    isPrivate: PropType.bool,
    component: PropType.oneOfType([PropType.element, PropType.func]).isRequired,
};

export default Router;