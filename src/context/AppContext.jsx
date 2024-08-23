import { createContext, useState } from "react";
//Initializing appcontext
export const AppContext=createContext();

//create appcontext provider functions

const AppContextProvider=(props)=>{
    const [userData,setUserDate]=useState(null);
    const [chatData,setChatData]=useState(null);

    const value={
        //Here we will add the values 
        name:'tejamacharla'
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
