import React from 'react';

function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li><a href={'/contact'}>Contact</a></li>
                    <li><a href={'/blog'}>Blog</a></li>
                    <li><a href={'/configurator'}>PIZZA CONFIGURATOR</a></li>
                </ul>
            </nav>
        </header>  
    );
}

export  default Header;