import React from "react";
import {NavLink} from "react-router-dom";
export default function Header(){
    return(
    <div>
        <nav className="navbar navbar-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Nav className="navbar-brand" to="/home">MyWebsite</Nav>
                    </div>
                    <ul class="nav navbar-nav">
                        <li className="active">
                            <NavLink className="active" to="/home">Home</NavLink>
                        </li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
            </div> 
        </nav>
    </div>
    )
}