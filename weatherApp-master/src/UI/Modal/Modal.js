import React from 'react';

import styles from './Modal.module.css';

const Modal = () => {
    return (
        <div className={styles.Modal}>
            <span>Press Esc to exit the full screen mode</span>
        </div>
    )   
}

export default Modal;