import React from 'react';
import { withFirebase } from '../component/Firebase';
import AuthUserContext from '../component/Session/context';
import { compose } from 'recompose';

const withAuthentication = Component => {
    class withAuthentication extends React.Component {
        state = {
            authUser: ''
        }
        componentDidMount () {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser 
                        ? this.setState({authUser})
                        : this.setState({authUser: null});
                }
            )
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component />
                </AuthUserContext.Provider>
            )
        }
    }

    return compose(
        withFirebase
    )(withAuthentication);
};

export default withAuthentication;