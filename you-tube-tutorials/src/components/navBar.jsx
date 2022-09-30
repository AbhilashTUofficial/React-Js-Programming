import React, { Component } from 'react';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#1">Menu <span class="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a>
            </nav>
        );
    }
}
 
export default NavBar;