import React from "react";
import {Link,Outlet} from "react-router-dom";

const Projects=()=>{
    return(
        <div>
            <h1 style={{color:"blue"}}>Projects</h1>
            <nav>
            <Link style={{marginRight:"20px"}} to="/projects/featured">Featured Projects</Link>
            <Link style={{marginRight:"20px"}} to="/projects/new">New Projects</Link>
            </nav>
            <Outlet/>
        </div>
    );
}
export default Projects;