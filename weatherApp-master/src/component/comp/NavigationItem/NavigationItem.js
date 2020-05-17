import React from 'react';
// import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = (props) => {
    let linkItem = null;

    if (props.authUser) {
        linkItem = [
            { linkName: 'Home', to: '/' },
            { linkName: 'My cities', to: '/mycities' },
            { linkName: 'Logout', to: '/logout' }   
        ];
    } else {
        linkItem = [{ linkName: 'Login', to: '/login' }];
    }

    return (
        <ul className="navigation__list">
            {
                linkItem.map(link => {
                    return (
                        <li key={link.linkName} className="navigation__item">
                            <a href={link.to} activeclassname="active" className="navigation__link">{link.linkName}</a>
                        </li>
                    )
                })
            }
        </ul>
    )  
};

export default NavigationItem;