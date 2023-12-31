import React from "react";

const data={
    name:"veeranji",
    age:24,
    qualification:"java"
}

export const DataContext=React.createContext();

export const DataContextProvider=({children})=>{
    return(
        <div>
            <DataContext.Provider value={data}>{children}</DataContext.Provider>
        </div>
    );
}