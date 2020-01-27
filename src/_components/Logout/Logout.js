import React, { Component } from 'react';

// import home_1 from '../../_assets/img/home-1.png';
// import home_2 from '../../_assets/img/home-2.png';

class Logout extends Component {
    componentWillMount() {
        window.localStorage.clear();
        window.location.reload();
    }

    render(){
        return null;
    }

}

export default (Logout);