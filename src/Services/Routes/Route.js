import React from 'react';
import PropType from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Portal from '../../Views/_layouts/Portal';
import Default from '../../Views/_layouts/Default';

import { store } from '../store';

function Router({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const { signed } = store.getState().auth;
    
    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    } 

    if (signed && !isPrivate) {
        return <Redirect to="/Dashboard" />
    }

    const Layout = signed ? Portal : Default;

    return <Route 
        {...rest}
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}

    />

}

Router.propTypes = {
    isPrivate: PropType.bool,
    component: PropType.oneOfType([PropType.element, PropType.func]).isRequired,
};

export default Router;