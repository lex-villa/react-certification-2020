import React, { useState } from 'react';

import { Card } from './AuthPage.styled';
import loginApi from '../../utils/login.api';

const AuthPage = () => {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('entro al submithandler');

    try {
      const response = await loginApi(userNameValue, passwordValue);
      console.log('despues del await');
      console.log(response);
    } catch (error) {
      console.log('entro al error');
      console.log(error);
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>Login Required</h2>
        <hr />

        <div>
          <label htmlFor="username">
            Username
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={userNameValue}
              onChange={(e) => setUserNameValue(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </Card>
  );
};

export default AuthPage;