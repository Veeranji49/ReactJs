import React from "react";
import { useNavigate } from "react-router-dom";

const Success=()=>{

    const navigate=useNavigate();
    const back=()=>{
        navigate("/")
    }
    return(
        <div>
            <h2 style={{color:"green"}}>Successfully Submitted</h2>
            <button onClick={back}>back to Home</button>
        </div>
    )
}
export default Success;