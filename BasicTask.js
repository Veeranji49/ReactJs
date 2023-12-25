import React from "react";
import ReactJs_logo from "./images/ReactJs_logo.png"

const BasicTask=()=>{
    
    return(
        <div>
            <Title/>
            <Picture/>
            <Details/>
        </div>
    )
}

const Title=()=>{
    return(
        <h1>Welcome to ReactJs</h1>
    );
}

const Picture=()=>{
    return(
        <img src={ReactJs_logo} alt="anji"/>
    );
}

const Details=()=>{
    return(
        <h6>ReactJs is a JavaScript Library</h6>
    );
}


export default BasicTask;