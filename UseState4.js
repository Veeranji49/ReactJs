import React,{useState} from "react";

const UseState4=()=>{
    const[firstName,setFirstName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const HandleName=(e)=>{
        setFirstName(e.target.value);
    }
    const HandleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const HandlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const HandleSubmit=(e)=>{
        e.preventDefault(e.target.value);
        
        let obj={
            firstName:firstName,
            email:email,
            password:password
        }
        console.log(obj);
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <div>
                <input type="text" id="firstName" name="firstName"
                value={firstName} placeholder="enter firstName"
                onChange={HandleName}/>
                </div>
                <div>
                    <input type="text" id="email" name="email"
                    value={email} placeholder="enter email"
                    onChange={HandleEmail}/>
                </div>
                <div>
                <input type="text" id="password" name="password"
                value={password} placeholder="enter password"
                onChange={HandlePassword}/>
                </div>
                <div>
                    <input type="submit" name="submit"/>
                </div>
            </form>
        </div>
    )
}
export default UseState4;