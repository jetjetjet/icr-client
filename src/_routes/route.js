import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../_components/Home/Home';
import Logout from '../_components/Logout/Logout';
import devextreme from '../_components/devextreme';

import UnathorizedPage from '../_components/Other/UnathorizedPage';
import UserContainer from "../_components/User/UserContainer";
import RoleContainer from "../_components/Role/RoleContainer";


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
                <Route exact path ='/Role' component={RoleContainer} />
                <Route exact path ='/User' component={UserContainer} />
            </Switch>
        );
    }

}
