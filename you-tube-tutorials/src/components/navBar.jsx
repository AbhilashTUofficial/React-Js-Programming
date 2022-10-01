import React, { Component } from 'react';



//? NavBar only have one simple  thing to render, 
//? situations like this we use stateless funcional componants (sfc)
// the normal class component also work too. 
const NavBar = ({totalCounters}) => {
    return (  
        <nav className="navbar navbar-light bg-light">
                 <a className="navbar-brand" href="#1">Menu <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
             </nav>
    );
}
 
export default NavBar;


//? Class component
// class NavBar extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <nav class="navbar navbar-light bg-light">
//                 <a class="navbar-brand" href="#1">Menu <span class="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;