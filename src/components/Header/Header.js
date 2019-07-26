import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';


const header = (props) => {
    return (
        <div>
            <div className="site-header">
                <div className="container">
                    <a href="index.html" className="branding">
                        <img src="images/logo.png" alt="" className="logo" />
                        <div className="logo-type">
                            <h1 className="site-title">Company name</h1>
                            <small className="site-description">tagline goes here</small>
                        </div>
                    </a>
                    <div className="main-navigation">
                        <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                        <ul className="menu">
                            <li className="menu-item"  ><NavLink activeClassName="current-menu-item" activeStyle={{ borderColor: '#009ad8', color: '009ad8' }} to="/" exact>Home</NavLink></li>
                            <li className="menu-item" ><NavLink  activeStyle={{ borderColor: '#009ad8', color: '009ad8' }} to="/posts">Posts</NavLink></li>
                            <li className="menu-item"><NavLink  activeStyle={{ borderColor: '#009ad8', color: '009ad8' }} to="/new-post">New Post</NavLink></li>
                            <li className="menu-item"><NavLink  activeStyle={{ borderColor: '#009ad8', color: '009ad8' }} to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="mobile-navigation"></div>
                </div>
            </div>
        </div>
    );
}

export default header;