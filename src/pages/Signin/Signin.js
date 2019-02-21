import React from 'react';

import {SignInForm} from '../../Components/SigninForm';
import {SignUpLink} from '../../Components/SignupForm';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

export default SignInPage;