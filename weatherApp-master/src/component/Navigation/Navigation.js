import React, { Component } from 'react';
import { withRouter } from 'react-router';

// import NavigationItem from './NavigationItem/NavigationItem';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawToggle';
import SideNav from '../SideDrawer/SideNav';
import Nav from '../comp/Navigation';
import './Navigation.css';

class Navigation extends Component {
    state = {
        showSideNav: false,
        showFullNav: false
    }

    render() {
        return (
            <div className="row">
                <div className="Navigation">
                    <div className="col-4-of-12">
                        <span className="Logo" {...this.props} onClick={() => {this.props.history.push('/')}}>Weather.</span>
                    </div>
                    <DrawerToggle click={() => this.setState(prevState => ({showSideNav: !prevState.showSideNav}))}/>
                    <div className="col-6-of-12 DesktopOnly">
                        <Nav showFullNav={this.state.showFullNav} click={(event) => this.setState({ showFullNav: true })} />
                    </div>
                </div>
                <SideNav showSideNav={this.state.showSideNav}/>
            </div>
        )
    }
};

export default withRouter(Navigation);
