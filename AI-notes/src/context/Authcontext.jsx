import {useState,useEffect,createContext} from 'react';
export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [user,setUser] = useState(false);
useEffect(()=>{
   

    
})
    return(
        <UserContext.Provider value={{user,}}>
            {children}
        </UserContext.Provider>
    )
}