import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../../assets/images/logo.png'
export default function Header() {
    return (
        <div>
            <header id="header-container">
                {/* Header */}
                <div id="header">
                    <div className="container">
                        {/* Left Side Content */}
                        <div className="left-side">
                            {/* Logo */}
                            <div id="logo">
                                <NavLink  to="/home"><img src={logo} /></NavLink>
                            </div>
                            {/* Mobile Navigation */}
                            <div className="mmenu-trigger">
                                <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                            {/* Main Navigation */}
                            <nav id="navigation" className="style-1">
                                <ul id="responsive">
                                    <li>
                                        <NavLink  className="current" to="/home">Home</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li><a href="#">Contact</a>
                                    </li>
                                    <li>
                                        <NavLink  className="" to="/profile">Profile</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className="clearfix" />
                            {/* Main Navigation / End */}
                        </div>
                        {/* Left Side Content / End */}
                        {/* Right Side Content / End */}
                        <div className="right-side">
                            <div className="header-widget">
                                <NavLink to="/login" className="sign-in">
                                    <i className="sl sl-icon-login" /> Sign In
                                </NavLink>
                                <NavLink to="/register" className="sign-in">
                                    <i className="sl sl-icon-login" /> Register
                                </NavLink>
                            </div>
                        </div>
                        {/* Right Side Content / End */}
                        {/* Sign In Popup */}
                        <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                            <div className="small-dialog-header">
                                <h3>Sign In</h3>
                            </div>
                            {/*Tabs */}

                        </div>
                        {/* Sign In Popup / End */}
                    </div>
                </div>
                {/* Header / End */}
            </header>
            <div className="clearfix" />
        </div>

    )
}
