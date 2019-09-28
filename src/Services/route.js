import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import Perfil from '../Views/Perfil';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Perfil" component={Perfil} />
            <Route path="/Perfil" component={SignUp} />
        </Switch>
    );
}

export default Routes;