import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/auth/Login';
import { Home, AlbumList, TechnologyList } from './components';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={Login} title="Please Login" initial />
          </Scene>
          <Scene key="main">
            <Scene key="home" component={Home} title="Home" />
            <Scene key="albumList" component={AlbumList} title="Albums" />
            <Scene key="technologyList" component={TechnologyList} title="Technology List" />
            <Scene
               key="employeeList"
               component={EmployeeList}
               title="Employee List"
               rightTitle="Add"
               onRight={() => Actions.employeeCreate()}
            />
            <Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee" />
          </Scene>
        </Scene>
      </Router>
    );

export default RouterComponent;
