import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <SignIn path="/login" routing="path" />
    </div>
  );
};

export default Login;
