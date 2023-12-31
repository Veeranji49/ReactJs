import React,{useState,useRef,useEffect} from "react";

const UseRef1=()=>{
    const[firstName,setFirstName]=useState("");
    const rederCount=useRef(1);

    useEffect(()=>{
        rederCount.current=rederCount.current+1;
    });

    return(
        <div>
            <input type="text" name="firstName" value={firstName} id="firstName" 
            onChange={(e)=>{
                setFirstName(e.target.value)
            }}/>
            <h1>Text:{firstName}</h1>
            <h2>Component Rendering {rederCount.current} times</h2>
        </div>
    )
}
export default UseRef1;