import React from 'react';
import {
    NavLink
  } from "react-router-dom";
  

function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName="selected" >Home</NavLink></li>
                    <li><NavLink to="/blog" exact activeClassName="selected" >Blog</NavLink></li>
                    <li><NavLink to="/configurator" exact activeClassName="selected" >Pizza creator</NavLink></li>
                </ul>
            </nav>
        </header>  
    );
}

export  default Header;