import React, { Component } from 'react';
import { connect } from 'remx';

import authStore from '../_utilization/auth';

import '../_assets/css/dashforge.landing.css';

import LoginLayout from './LoginLayout';
import { Routes } from '../_routes/route';
import Sidebar from './SideBar';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class MainLayout extends Component {
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
        if (this.props.userName !== prevProps.userName ) {
            this.setState({login: this.props.login})
            this.setState({userId: this.props.userId})
            this.setState({userName: this.props.userName})
            if (this.props.userId) {
                var addScript = document.createElement('script');
                addScript.setAttribute('src', '/_assets/js/dashforge.js');
                document.body.appendChild(addScript);
            }
        }
    }

    render(){
        const token = window.localStorage.getItem('token');
        if (!this.state.login && !token) {
            return (<LoginLayout />)
        } else {
            if (this.state.userId) {
                return(
                    <div className="App">
                        <aside className="aside aside-fixed">
                            <Sidebar userName={this.state.userName} roleName={this.state.roleName} />
                        </aside>
                        <div className="content ht-100v pd-0">
                        <div className="content-header">
                            <nav className="nav">
                                <a href="" className="nav-link"><i data-feather="help-circle"></i></a>
                                <a href="" className="nav-link"><i data-feather="grid"></i></a>
                                <a href="" className="nav-link"><i data-feather="align-left"></i></a>
                            </nav>
                        </div>
                            <Routes user={this.state.userId}/>
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

export default connect(mapStateToProps)(MainLayout);