import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <SignUp path="/signup" routing="path" />
    </div>
  );
};

export default Signup;
