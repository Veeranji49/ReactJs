import React,{useReducer} from "react";

const reducer=(state,action)=>{

    if(action.type==="DELETE")
    {
        const newPerson=state.data.filter((fetch)=>{
            return fetch.id!==action.payLoad
        });

        return{
            ...state,
            data:newPerson,
            length:state.length-1
        }
    }
    return state;
}

const UseReducer1=()=>{

    const intialstate={
        data:[
            {id:1,name:"masterworks",worth:25000},
            {id:2,name:"wipro",worth:30000},
            {id:3,name:"tcs",worth:35000}
        ],
        length:3
    }
    const[state,dispatch]=useReducer(reducer,intialstate);

    const handleDelete=(id)=>{
        dispatch({
            type:"DELETE",
            payLoad:id
        });
    }
    const handleEdit=(id)=>{
        dispatch({
            type:"EDIT",
            payLoad:id
        });
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>welcome to useReducer Hook</h1>
            <hr/>
            <h2>Current length:{state.length}</h2>
            <hr/>
            <div>
                {state.data.map((eachUser)=>{
                    const{id,name,worth}=eachUser;
                    return(
                        <li key={id}>
                            <div>
                                <h5>{name}</h5>
                                <h5>{worth}</h5>
                                <button onClick={()=>handleEdit(id)}>EDIT</button>
                                <button onClick={()=>handleDelete(id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}
export default UseReducer1;