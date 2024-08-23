import { createContext } from "react";
//Initializing appcontext
export const AppContext=createContext();

//create appcontext provider functions

const AppContextProvider=(props)=>{


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
