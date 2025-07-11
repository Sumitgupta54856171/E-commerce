import { redirect } from "react-router-dom";
import { ContentContext } from "../context/Content";
import { useContext } from "react";
import axios from 'axios';
function Logout(){
    const {setUser} = useContext(ContentContext);
    async function handlelogout(){
        const response = await axios.get('http://localhost:3000/api/verify', {withCredentials: true});
        console.log(response);
        console.log(response.data.user)
        console.log('successfull');
        if(response.data.user.username !== null && response.data.user.username !== undefined){
            setUser(true);
        }
    }
   
    
    return(
        <>
        <button className="  rounded-md px-6 py-3 text-white font-semibold hover:bg-red-700 hover:shadow-red-700 
  transition duration-300 ease-in-out" onClick={handlelogout}>Logout</button>
        </>
    )
}
export default Logout;