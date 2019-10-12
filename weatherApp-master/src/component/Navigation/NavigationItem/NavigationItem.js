import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = (props) => {
    let linkItem = null;
    let navStyle = ['NavigationItem'];
    if (props.forMobile) {
        navStyle.push('forMobile');
    }

    const token = localStorage.getItem('token');

    if (token) {
        linkItem = [
            { linkName: 'Home', to: '/' },
            { linkName: 'My cities', to: '/mycities' },
            { linkName: 'Logout', to: '/logout' }   
        ];
    } else {
        linkItem = [{ linkName: 'Login', to: '/login' }];
    }

    return (
        <ul className={navStyle.join(' ')}>
            {
                linkItem.map(link => {
                    return (
                        <li key={link.linkName}>
                            <NavLink to={link.to} exact activeClassName="active">{link.linkName}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )  
};

export default NavigationItem;