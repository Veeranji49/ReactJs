import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{

    const navigate=useNavigate();
    const useenavigate=()=>{
        navigate("/success");
    }
    return(
        <div>
            <h1 style={{color:"pink"}}>Home page</h1>
            <button onClick={useenavigate}>success</button>
        </div>
    );
}
export default Home;
