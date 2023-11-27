import React from 'react';
//Icons
import google from '../assets/google.svg';
//styles
import style from './Login.module.css';
//firebase
import firebase from 'firebase/app';
import { auth } from '../firebase';

const Login = () => {
    return (
        <div className={style.loginPage}>
            <div className={style.loginCard}>
                <h2>Wellcome To My Messenger!</h2>
                <div className={style.button} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} alt="google" />Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;