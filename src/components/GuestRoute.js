import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isGuest } from '../services/loginSession';


const GuestRoute = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isGuest() ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default GuestRoute;