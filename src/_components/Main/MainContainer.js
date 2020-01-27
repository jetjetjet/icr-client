import React, { Component } from 'react';
import { connect } from 'remx';

import authStore from '../../_utilization/auth';

import '../../_assets/css/dashforge.landing.css';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Main from './Main';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.options = {

    }
    this.state = {
      userId: this.props.userId,
      login: this.props.login,
      userName: 0,
      roleName: this.props.roleName,
      page: '',
      scriptLoaded: null,
      scriptKey: 0,
      key: Math.random(),
    }
    this.baseState = this.state;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userName !== prevProps.userName) {
      this.setState({ login: this.props.login })
      this.setState({ userId: this.props.userId })
      this.setState({ userName: this.props.userName })
      if (this.props.userId) {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '/_assets/js/dashforge.js');
        document.body.appendChild(addScript);
      }
    }
  }

  render() {
    return (
      <Main
        {...this.state}
      />
    )
  }
}

function mapStateToProps(props) {
  return {
    userId: authStore.getters.getUserId(),
    userName: authStore.getters.getUserName(),
    roleName: authStore.getters.getRoleName(),
    login: authStore.getters.getLogin(),
  }
}

export default connect(mapStateToProps)(MainContainer);