import React,{useState} from "react";

const UseState3=()=>{
    const [data,setData]=useState(false);

    const handleCheck=()=>{
        setData(!data);
    }
    return(
        <div>
            <button onClick={handleCheck}>{data? "hide" : "show"}</button>
            {data?(<p>ReactJs is JavaScript Library and it is used for creating single page applications</p>):(<h1>Data is hidden</h1>)}
        </div>
    )

}
export default UseState3;