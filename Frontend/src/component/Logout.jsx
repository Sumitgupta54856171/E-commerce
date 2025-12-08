
import { AuthContext } from "../context/Content";
import { useContext } from "react";
import axios from 'axios';
function Logout(){
    const {userauth} = useContext(AuthContext);
    
   
    
    return(
        <>
        <button className="  rounded-md px-6 py-3 text-white font-semibold hover:bg-red-700 hover:shadow-red-700 
  transition duration-300 ease-in-out" onClick={handlelogout}>Logout</button>
        </>
    )
}
export default Logout;