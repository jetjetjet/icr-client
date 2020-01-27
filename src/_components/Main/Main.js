import React, { Component } from 'react';
import { connect } from 'remx';

import authStore from '../../_utilization/auth';

import '../../_assets/css/dashforge.landing.css';

import Login from '../Login/Login';
import { Routes } from '../../_routes/route';
import Sidebar from '../../_layout/SideBar';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class Main extends Component {

    render() {
        const {
            userId,
            login,
            userName,
            roleName,
        } = this.props

        const token = window.localStorage.getItem('token');

        if (!login && !token) {
            return (<Login />)
        } else {
            if (userId) {
                return (
                    <div className="App">
                        <aside className="aside aside-fixed">
                            <Sidebar userName={userName} roleName={roleName} />
                        </aside>
                        <div className="content ht-100v pd-0">
                            <div className="content-header">
                                <nav className="nav">
                                    <a href="" className="nav-link"><i data-feather="help-circle"></i></a>
                                    <a href="" className="nav-link"><i data-feather="grid"></i></a>
                                    <a href="" className="nav-link"><i data-feather="align-left"></i></a>
                                </nav>
                            </div>
                            <Routes user={userId} />
                        </div>
                    </div>
                )
            } else {
                return null
            }
        }
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

export default connect(mapStateToProps)(Main);