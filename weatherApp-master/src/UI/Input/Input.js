import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
    let InputElement = null;
    let inputStyle = [styles.InputElement];

    if (!props.valid && props.touched) {
        inputStyle.push(styles.invalid)
    }

    switch (props.elementtype) {
        case 'input':
            InputElement = (
                <div className={styles.Input}>
                    <input 
                        className={inputStyle.join(' ')} 
                        value={props.value} 
                        onChange={props.changed} 
                        {...props.elementconfig}/>
                    <label className={styles.label} htmlFor={props.inputId}>{props.label}</label>
                </div>
            )   
            break;
        default:
            return InputElement;
    };
    return (
        <div >
            {InputElement}
        </div>
    );
}

export default Input;