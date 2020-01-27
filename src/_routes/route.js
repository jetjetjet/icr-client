import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../views/home/Home';
import Logout from '../views/Logout';
import devextreme from '../views/devextreme';

import User from '../views/User/User';
import Role from '../views/Role/Role';
// import User from '../views/user/User';
// import MasterUser from '../views/Master/User/User';
import UnathorizedPage from '../views/other/UnathorizedPage';


export class Routes extends Component  {
    constructor(props) {
        super(props);

        this.options = {
            
        }
        this.state = {
            user: this.props.user
        }
    }

    checkAuthorized(role){
        let return_value = false;
        let user_role = 'admin';
        for (let index = 0; index < role.length; index++) {
            if (role[index] == user_role){
                return_value = true;
            }
        }

        return return_value;
    }

    render(){
        return(
            <Switch>
                <Route exact path ='/' component={(this.checkAuthorized(['root','admin', 'user']) === true) ? Home : UnathorizedPage} />
                <Route exact path ='/logout' component={Logout} />
                <Route exact path ='/dev' component={devextreme} />
                <Route exact path ='/Role' component={Role} />
                
                <Route exact path ='/User' component={User} />
            </Switch>
        );
    }

}
