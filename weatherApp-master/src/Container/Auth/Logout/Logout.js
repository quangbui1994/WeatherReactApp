import { Component } from 'react';
import { withRouter } from 'react-router';

import * as Routes from '../../../constants/routes';
import { withFirebase } from '../../../component/Firebase';

class Logout extends Component  {
    componentDidMount () {
        this.props.firebase.doSignOut();
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('uid');
        this.props.history.push(Routes.LANDING_PAGE);
    }

    render() {
        return null;
    }       
}

export default withRouter(withFirebase(Logout));