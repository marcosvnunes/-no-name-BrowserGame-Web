import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Router';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import SelectCharacter from '../pages/SelectCharacter';

import DashBoard from '../pages/Dashboard';
import Potions from '../pages/Potions';

// import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route path="/select-character" component={SelectCharacter} isPrivate />

    <Route path="/potions" component={Potions} isPrivate isSelectChar />
    <Route path="/dashboard" component={DashBoard} isPrivate isSelectChar />
  </Switch>
);

export default Routes;
