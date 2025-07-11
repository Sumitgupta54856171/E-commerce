import { ContentContext } from "./Content";
import axios from "axios";
import { useContext } from "react";
function DATA({Children}) {
async function login(email,password){
    const data = {
        email,
        password
    }
    const response = await axios.post('http://localhost:3000/api/login',data)
    console.log(response);
    console.log('successfull')
    const token = response.data;
}
async function signup(email,username,password){
    const data = {
        username,
        email,
        password
    }
    const response = await axios.post('http://localhost:3000/api/signup',data)
    console.log(response);
    console.log('successfull')
}
return(
<ContentContext.Provider value={{login,signup}}>
    {Children}
</ContentContext.Provider>
    
)
}
export default DATA;