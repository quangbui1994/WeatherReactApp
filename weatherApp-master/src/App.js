import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

import Navigation from './component/Navigation/Navigation';
import './App.css';
import * as Routes from './constants/routes';
import { withFirebase } from './component/Firebase';
import { AuthUserContext } from './component/Session';
import withAuthentication from './hoc/withAuthentication';

const Home = lazy(() => import('./Container/Home/Home'));
const Auth = lazy(() => import('./Container/Auth/Auth'));
const Logout = lazy(() => import('./Container/Auth/Logout/Logout'));
const MyCities = lazy(() => import('./Container/MyCities/MyCities'));
const Maps = lazy(() => import('./Container/Map/Map'));
const ResetPassword = lazy(() => import('./component/ResetPassword/ResetPassword'));
const Admin = lazy(() => import('./component/Admin/Admin'));

class App extends Component {
  state = {
    authUser: ''
  }
  componentDidMount () {
    this.listerner = this.props.firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.setState({ authUser });
      } else {
        this.setState({ authUser: null });
      }
    })
  }

  componentWillUnmount () {
    this.listerner();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <div className="App">
          <div className="container">
              <Navigation />
          </div>
          <div className="container">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path={Routes.LANDING_PAGE} exact component={Home}/>
                <Route path={Routes.HOME} exact component={Home}/>
                <Route path={Routes.MY_CITIES} component={MyCities}/>
                <Route path={Routes.LOGIN} component={Auth}/>
                <Route path={Routes.LOG_OUT} component={Logout}/>
                <Route path={Routes.PASSWORD_RESET} component={ResetPassword}/>
                <Route path={Routes.MAP} component={Maps}/>
                <Route path={Routes.ADMIN} component={Admin}/>
              </Switch>
            </Suspense> 
          </div>
        </div>
      </AuthUserContext.Provider>
    )
  }
}

export default withAuthentication(withFirebase(App));
