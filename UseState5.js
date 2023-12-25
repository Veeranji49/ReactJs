import React,{useState} from "react";

const UseState5=()=>{
    const[firstName,setFirstName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const Allfunctions=(e,name)=>{
        console.log(e.target.value,name);

        if(firstName==="firstName")
        {
            setFirstName(e.target.value);
        }
        else if(email==="email")
        {
            setEmail(e.target.value);
        }
        else if(password==="password"){
            setPassword(e.target.value);
        }
    }
        const HandleSubmit1=(e)=>{
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
            <form onSubmit={HandleSubmit1}>
                <div>
                    <input type="text" name="firstName" value={firstName}
                    id="firstName" onChange={(e)=>Allfunctions(e,firstName)}
                    placeholder="enter first Name"/>
                </div>
                <div>
                    <input type="text" name="email" value={email}
                    id="email" onChange={(e)=>Allfunctions(e,email)}
                    placeholder="enter email"/>
                </div>
                <div>
                    <input type="text" name="password" id="password"
                    value={password} onChange={(e)=>Allfunctions(e,password)}
                    placeholder="enter password"/>
                </div>
                <div>
                    <input type="submit" name="submit"/>
                </div>
            </form>
        </div>
    )
}
export default UseState5;