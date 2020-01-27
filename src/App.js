import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component } from 'react';
import { connect } from 'remx';
import authStore from './_utilization/auth';

import { HashRouter, Route, Switch } from 'react-router-dom';

import broker from './_utilization/broker';

import './_assets/css/dashforge.css';
import './_assets/css/app.css';

import MainLayout from './_layout/MainLayout';



class App extends Component {
  componentDidMount(){
    const token = window.localStorage.getItem('token');
    if (token) {
      broker.checkUserIdentity().then(res => {
        if (res.status) {
          authStore.setters.setUserId(res.user_id);
          authStore.setters.setUserName(res.user_name);
          authStore.setters.setLogin(true);
         } else {
          window.localStorage.clear();
          window.location.reload();
        }
      });
    }
  }

  render(){
    return (<HashRouter>
      <Switch>
        {/* <Route exact path="/login" name="Login Page" component={LoginLayout} /> */}
        <Route path="" name="Home" component={MainLayout} />
      </Switch>
      
    </HashRouter>);
  }

}

function mapStateToProps(props) {
  return {
      userId: authStore.getters.getUserId(),
      user_name: authStore.getters.getUserName(),
      login: authStore.getters.getLogin(),
  }
}

export default connect(mapStateToProps)(App);
