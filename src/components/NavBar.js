import { useState } from 'react';
import { NavLink } from "react-router-dom";


    
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'green',
    textdecoration: "none",
    
}

function NavBar(){

    return (
        <div >
            <NavLink
                to="/"
                exact
                style={linkStyle} 
            >
                Home
            </NavLink>
            <NavLink
                to="/destinations"
                exact
                style={linkStyle}
                
            >
                Destinations
            </NavLink>
            <NavLink
                to="/story-form"
                exact
                style={linkStyle}
            >
 
                Tell Us Your Story
            </NavLink>
            <NavLink
                to="/stories"
                exact
                style={linkStyle}
                
            >


                Travel Stories
            </NavLink>
        
        </div>

    )
}

export default NavBar;