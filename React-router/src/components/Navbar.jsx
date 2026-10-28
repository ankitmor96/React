

import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <ul style={{display:"flex", gap:"2rem"}}>
         <NavLink to={"/"}>Home</NavLink>
         <NavLink to={"/about"}>About</NavLink>
         <NavLink to={"/service"}>Service</NavLink>
        </ul>
        
    )
}

export default Navbar;