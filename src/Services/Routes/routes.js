import React from 'react';
import {
    Switch,
} from 'react-router-dom';
import Route from './Route';
import SignIn from '../../Views/SignIn';
import SignUp from '../../Views/SignUp';
import Perfil from '../../Views/Perfil';
import Dashboard from '../../Views/Dashboard';
import NewMeetup from '../../Views/NewMeetup';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Perfil" component={Perfil} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/NewMeetup" component={NewMeetup} />
        </Switch>
    );
}

export default Routes;