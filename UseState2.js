//solving objects by useState

import React,{useState} from "react";


const UseState2=()=>{
    const data={
        name:"anji",
        age:23,
        course:"Java"
    };

    const [update,setUpdate]=useState(data);

    const UpdateName=()=>{
        setUpdate({
            ...data,               //spread operator
            name:"veeru"
        });
    }

    const UpdateAge=()=>{
        setUpdate({
            ...data,
            age:24
        });
    }
    const UpdateCourse=()=>{
        setUpdate({
            ...data,
            course:"Data Science"
        });
    }

    return(
        <div>
            <h1>My Name is {update.name}</h1>
            <button onClick={UpdateName}>show me name</button>
            <h2>My age is {update.age}</h2>
            <button onClick={UpdateAge}>show me age</button>
            <h3>My course is {update.course}</h3>
            <button onClick={UpdateCourse}>show me course</button>
        </div>
    )
}
export default UseState2;