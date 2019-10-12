import React from 'react';

import styles from './SideNav.module.css';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

const SideNav = (props) => {
    let sideNavStyles = [styles.SideNav];
    if (!props.showSideNav) {
        sideNavStyles.push(styles.hidden);
    }

    return (
        <div className={sideNavStyles.join(' ')}>
            <NavigationItem forMobile/>
        </div>
    )
}

export default SideNav;