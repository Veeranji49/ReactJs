import React from "react";


const user={
    name:"anji",
    age:23,
    qualification:"degree"
};
export const UserContext=React.createContext();

export const UserContextProvider=({children})=>{
    return(
        <div>
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
        </div>
    );
}