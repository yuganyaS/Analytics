import React, { Component } from 'react';
import logo from '../img/analytics.png';
class Header extends Component{
    render(){
        return(
            <header className="header-section">
                <div className="side-section">
                    <img src={logo} className="logo" alt="analytics" />
                    <span className="vertical-middle">Analytics</span>
                </div>
                <div className="side-section">
                    <span className="vertical-middle">info</span>
                    <span className="vertical-middle">Login</span>
                </div>
            </header>
        )
    }
}
export default Header;