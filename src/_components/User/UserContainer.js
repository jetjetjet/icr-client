import React, { Component } from 'react';
import broker from '../../_utilization/broker';
import User from './User';

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    broker.fetch.get('/user/getAll')
      .then(res => {
        this.setState({ data: res.data.data });
      })
      .catch(err => {
      });
  }

  render() {
    return (
      <User
        {...this.props}
        {...this.state}
      />
    )
  }
}

export default (UserContainer);