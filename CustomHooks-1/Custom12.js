import React, { useState } from "react";
import useCustom from "./useCustom";

const Custom12=()=>{
    const[count,setCount]=useState(0);

    useCustom(count);
    return(
        <div style={{textAlign:"center"}}>
            <h1>Count-{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Custom12;