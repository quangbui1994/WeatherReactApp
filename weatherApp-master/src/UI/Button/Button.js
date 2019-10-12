import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
    let btnStyle = [styles.Btn];

    btnStyle.push(styles[props.btnType]);

    if (props.disabled) {
        btnStyle.push(styles.disabled);
    }

    return (
        <button type={props.type} className={btnStyle.join(' ')} onClick={props.click}>{props.children}</button>
    )
}

export default Button;