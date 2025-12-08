import axios from "axios";
import { AuthContext } from "./Content";
import  {useState} from 'react'
function Authprovider({ children }) {
const [userauth,setUserauth] = useState(false);
const [message,setmessage] = useState('');
async function login(email,password){
    const data = {
        email,
        password
    }
    await axios.post('http://localhost:9091/api/users/login',data)
    .then((response)=>{
        console.log(response);
        console.log('successfull')
        const token = response.data;
        if(token && token !== null && token !== undefined){
           setUserauth(true);
        }
    })
    .catch((error)=>{
        console.log(error);
        console.log('error')
    })
}
async function signup(username,email,password,role){
    const data = {
        username,
        email,
        password,
        role
    }
   await axios.post('http://localhost:9091/api/users/register',data)
    .then((response)=>{
        console.log(response);
        console.log('successfull')
        setUserauth(true);
        setmessage(response.message)
    })
    .catch((error)=>{
        console.log(error);
        console.log('error')
        console.log(error.message)
    })
}
async function handlelogout(){
    const response = await axios.get('http://localhost:3000/api/verify', {withCredentials: true});
    console.log(response);
    console.log(response.data.user)
    console.log('successfull');
    if(response.data.user.username !== null && response.data.user.username !== undefined){
        setUserauth(false);
    }
}
return(
<>
<AuthContext.Provider value={{login,signup,userauth,setUserauth,handlelogout,message}}>
    {children}
</AuthContext.Provider>
</>
    
)
}
export default Authprovider;