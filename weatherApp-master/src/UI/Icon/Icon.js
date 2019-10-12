import React from 'react';

import './Icon.css';

const Icon = (props) => (
    <div>
        <i className={`icon ion-ios-${props.iconName} ${props.size}`}></i>
    </div>
)

export default Icon;