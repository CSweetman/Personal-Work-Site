import * as React from 'react';
import { Component } from 'react';

export interface NavProps {

}

export interface NavState {

}

class NavBar extends React.Component<NavProps, NavState> {
    state = {}
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu">

                </div>
                <ul>
                    <li><a href=""></a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;