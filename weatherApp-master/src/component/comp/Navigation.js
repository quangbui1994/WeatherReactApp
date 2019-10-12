import React from 'react';
import { AuthUserContext } from '../Session/index';

import './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Nav = (props) => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <AuthUserContext.Consumer>
                    {authUser => <NavigationItem {...props} authUser={authUser}/>}
                </AuthUserContext.Consumer>
            </nav>
        </div>
    )
}

export default Nav;