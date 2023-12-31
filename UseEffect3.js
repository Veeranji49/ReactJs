import React,{useState,useEffect} from "react";

const URL="https://jsonplaceholder.typicode.com/users";
const UseEffect3=()=>{

    const[usersData,setUsersData]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[isError,setIsError]=useState({state:false,msg:""});

    const fetchURL=async(apiURL)=>{
        setIsLoading(true);
        setIsError({state:false,msg:""});
        try{
        const response=await fetch(apiURL);
        const data=await response.json();
        setUsersData(data);
        setIsLoading(false);
        setIsError({state:false,msg:""});
        }
        catch(err){
        setIsLoading(false);
        setIsError({state:true,msg:"Something went wrong"});
        }
    }

    useEffect(()=>{
        fetchURL(URL);
    },[]);

    if(isLoading)
    {
        return(
            <div>
                <h3 style={{color:"yellow"}}>Loading....</h3>
            </div>
        );
    }

    //optional shining
    if(isError?.status)
    {
        return(
            <div>
                <h3 style={{color:"red"}}>{isError?.msg}</h3>
            </div>
        )
    }
    return(
        <div>
            <h1 style={{color:"green"}}>Fetching APIs from Browser</h1>
            <hr/>
            <ul>
            {usersData.map((eachUser)=>{
                const{id,name,email}=eachUser;
                return(
                    <li key={id}>
                        <div>{name}</div>
                        <div>{email}</div>
                    </li>
                );
            })}
            </ul>
        </div>
    )

}
export default UseEffect3;