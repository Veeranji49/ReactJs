import React,{useContext} from "react";
import { UserContext } from "./UserContext";
import { DataContext } from "./DataContext";

const SubChild=()=>{

    const user=useContext(UserContext);
    console.log(user);

    const data=useContext(DataContext);
    console.log(data);
    return(
        <div>
            <h1>SubChild Component</h1>
        </div>
    )
}
export default SubChild;