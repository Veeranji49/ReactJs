import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound=()=>{

    const navigate=useNavigate();
    const handle=()=>{
        navigate("/");
    }
    return(
        <div>
            <h2 style={{color:"red"}}>No data found</h2>
            <button onClick={handle}>Back to Home</button>
        </div>
    );
}
export default NotFound;