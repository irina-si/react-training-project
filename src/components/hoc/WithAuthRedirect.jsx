import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const WithAuthRedirect = (Component) => { 
    let AuthRedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to='/login' />
        };
        return <Component {...props} />
        }

    let mapStateToPropsforRedirect = (state) => ({
            isAuth: state.auth.isAuth,
        });

    return connect(mapStateToPropsforRedirect)(AuthRedirectComponent)
    };

