import React from 'react';

import './LoginButton.css';

const LoginButton = (props) => {
    let style = ['login-btn'];
    if (props.name === 'Facebook') {
        style.push('FacebookStyle')
    } else if (props.name === 'Google') {
        style.push('GoogleStyle')
    }
    // const href = `http://localhost:3001/auth/${props.linkTo}`;
    let src = null;

    if (props.name === 'Google') {
        src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google_Plus_logo_2015.svg';
    } else if (props.name === 'Facebook') {
        src = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg';
    }

    return (
        <div className='col-6-of-12' onClick={props.click}>
            <div className={style.join(' ')}>
                <div className="login-icon-wrapper">
                    <img className="login-icon-svg" src={src} alt={props.name}/>
                </div>
                <p className="btn-text"><b>Sign in with {props.name}</b></p>
            </div>    
        </div>
    )
}

export default LoginButton;