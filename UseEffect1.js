import React,{useState,useEffect} from "react";

const UseEffect1=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("useEffect",count);
    });

    const increment=()=>{
        setCount((prevCount)=>prevCount+2);
    }
    const decrement=()=>{
        setCount((prevCount)=>prevCount-2);
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default UseEffect1;