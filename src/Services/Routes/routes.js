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
import Details from '../../Views/Details';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Perfil" component={Perfil} isPrivate />
            <Route path="/Dashboard" component={Dashboard} isPrivate />
            <Route path="/Meetup" component={NewMeetup} isPrivate />
            <Route path="/Details" component={Details} isPrivate />
        </Switch>
    );
}

export default Routes;