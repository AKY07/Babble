import React from 'react';
import { Button } from '@material-ui/core';

import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './Login.css';
import { actionTypes } from '../../reducer';

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://i.pinimg.com/736x/3f/83/26/3f8326ae92489327dc278963d362d5d4--tie-a-tie-visual-communication.jpg'
          alt='Babble'
        />

        <div className='login__text'>
          <h1>Sign in to Babble</h1>
        </div>
        <Button type='submit' onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
