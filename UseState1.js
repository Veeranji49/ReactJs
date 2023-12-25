import React,{useState} from "react";

const UseState1=()=>{

    const [count,setCount]=useState(0);

    const decrement=()=>{
        setCount((prevCount)=>prevCount-1);
        setCount((prevCount)=>prevCount-1);
    }
    const increment=()=>{
        setCount((prevCount)=>prevCount+1);
        setCount((prevCount)=>prevCount+1);
    }
    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default UseState1;