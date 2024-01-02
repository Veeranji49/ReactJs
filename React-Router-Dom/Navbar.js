import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{

    const navlinkstyles=({isActive})=>{
        return{
            textDecoration:isActive?"none":"underline",
            fontWeight:isActive?"bold":"normal",
            marginRight:"20px",
            
        }
    }
    return(
        <div>
            <NavLink style={navlinkstyles} to="/">Home</NavLink>
            <NavLink style={navlinkstyles} to="/about">About</NavLink>
            <NavLink style={navlinkstyles} to="/contact">Contact</NavLink>
            <NavLink style={navlinkstyles} to="/react">ReactJS</NavLink>
            <NavLink style={navlinkstyles} to="/projects">Projects</NavLink>
        </div>
    )
}
export default Navbar;