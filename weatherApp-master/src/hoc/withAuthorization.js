import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import { withFirebase } from '../component/Firebase';
import { AuthUserContext } from '../component/Session';
import * as Routes from '../constants/routes';

const withAuthorization = condition => Component => {
    class withAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!condition(authUser)) {
                        this.props.history.push(Routes.LANDING_PAGE)
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => condition(authUser) ? <Component {...this.props}/> : null}
                </AuthUserContext.Consumer>
            )
        }
    }

    return compose(
        withRouter,
        withFirebase
    )(withAuthorization)
}

export default withAuthorization;