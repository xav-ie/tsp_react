import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const style = {
        backgroundColor: 'lightcoral',
        padding: '1em'
    };

    return (
        <header style={style}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </header>
    );
}




export default Header;