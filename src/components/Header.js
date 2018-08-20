import React, { Component } from 'react';
import logo from '../img/analytics.png';
class Header extends Component{
    render(){
        return(
            <header className="header-section">
                <div class="side-section">
                    <img src={logo} className="logo" alt="analytics" />
                    <span class="vertical-middle">Analytics</span>
                </div>
                <div class="side-section">
                    <span class="vertical-middle">info</span>
                    <span class="vertical-middle">Login</span>
                </div>
            </header>
        )
    }
}
export default Header;