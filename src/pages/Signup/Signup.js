import React from 'react';

import {SignUpForm} from '../../Components/SignupForm';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <h3>Warning: This authentication system utilizes Firebase to store and retrieve information. I'm not doing much of protection besides the default. Feel free to use fake email.</h3>
    <SignUpForm />
  </div>
);


export default SignUpPage;