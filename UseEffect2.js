import React, {useState,useEffect} from "react";

const UseEffect2=()=>{
    const[count,setCount]=useState(0);
    const[pagewidth,setPagewidth]=useState(window.innerWidth);

    useEffect(()=>{
        const resizeHandler=()=>{
            setPagewidth(window.innerWidth);
        }
        window. addEventListener("resize",resizeHandler);
        console.log("I am adding");

        return()=>{
            console.log("I am removing");
            window.removeEventListener("resize",resizeHandler);
        }
    })

    const handleCount=()=>{
        setCount((prevCount)=>prevCount+1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>+</button>
            <h1>{pagewidth}</h1>
        </div>
    )
}
export default UseEffect2;