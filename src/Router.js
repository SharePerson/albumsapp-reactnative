import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/auth/Login';
import Home from './components/Home';

const RouterComponent = () => (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={Login} title="Please Login" initial />
          </Scene>
          <Scene key="main">
            <Scene key="home" component={Home} title="Home" />
          </Scene>
        </Scene>
      </Router>
    );

export default RouterComponent;
