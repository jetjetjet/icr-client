import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.options = {
            
        }
        this.state = {
            userName: this.props.userName,
            roleName: this.props.roleName
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="aside-header">
                    <Link to="/home" className="aside-logo">Apli<span>kasi</span></Link>
                    <a href="" className="aside-menu-link">
                        <i data-feather="menu"></i>
                        <i data-feather="x"></i>
                    </a>
                </div>
                <div className="aside-body">
                    <div className="aside-loggedin">
                        <div className="aside-loggedin-user">
                            <a href="#loggedinMenu" className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                                <h6 className="tx-semibold mg-b-0">{this.state.userName}</h6>
                                <i data-feather="chevron-down"></i>
                            </a>
                            <p className="tx-color-03 tx-12 mg-b-0">{this.state.roleName}</p>
                        </div>
                        <div className="aside-loggedin-user" id="loggedinMenu">
                            <ul className="nav nav-aside mg-b-0">
                            <li className="nav-item"><a href="/" className="nav-link"><i data-feather="logout"></i> <span>Dashboard</span></a></li>
                                <li className="nav-item"><a href="" className="nav-link"><i data-feather="user"></i> <span>Profile</span></a></li>
                                <li className="nav-item"><a href="/#/User" className="nav-link"><i data-feather="user"></i> <span>User</span></a></li>
                                <li className="nav-item"><a href="/#/Role" className="nav-link"><i data-feather="user"></i> <span>Role</span></a></li>
                                <li className="nav-item"><a href="/#/logout" className="nav-link"><i data-feather="logout"></i> <span>Logout</span></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
export default (Sidebar);