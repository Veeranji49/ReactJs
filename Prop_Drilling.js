import React,{useState} from "react";


const data={
    name:"anji",
    age:23,
    fees:5300,
    location:"hyderabad"
}
const Parent=()=>{

    const[user,setUser]=useState(data);
    
    return(
        <div>
            <h1>Parent Component</h1>
            <Child user={user}/>
        </div>
    )
}

const Child=(props)=>{
    return(
        <div>
            <h1>Child Component</h1>
            <Subchild user={props.user} />
        </div>
    )
}
const Subchild=({user})=>{
    return(
        <div>
            <h1>SubChild Component</h1>
            <div>Name:{user.name}</div>
            <div>Age:{user.age}</div>
            <div>Fees:{user.fees}</div>
            <div>Location:{user.location}</div>
        </div>
    )
}
export default Parent;