import React from "react";
import useCustom from "./useCustom";

const Custom21=()=>{

    const[count,increment,decrement,reset]=useCustom(0);

    return(
        <div style={{textAlign:"center"}}>
            <h1>Count-{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Custom21;