import React from 'react';
//styles
import styles from './Navbar.module.css';

const Navbar = (props) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                My Messenger
            </div>
            <div className={styles.logout} onClick={props.logoutHandler}>Logout</div>
        </div>
    );
};

export default Navbar;