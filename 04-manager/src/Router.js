import React from 'react';

import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import LoginForm     from './components/LoginForm';
import EmployeeIndex from './components/EmployeeIndex';
import EmployeeNew   from './components/EmployeeNew';
import EmployeeEdit  from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene initial key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            title="Please log in"
            key="loginForm"
            component={ LoginForm }
          />
        </Scene>
        <Scene key="main">
          <Scene
            initial
            title="Employees"
            key="employeeIndex"
            component={ EmployeeIndex }
            rightTitle="Add"
            onRight={ () => Actions.employeeNew() }
          />
          <Scene
            title="New Employee"
            key="employeeNew"
            component={ EmployeeNew }
          />
          <Scene
            title="Edit Employee"
            key="employeeEdit"
            component={ EmployeeEdit }
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;