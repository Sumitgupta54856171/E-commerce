import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { useState } from "react";
import Apparelhover from "../hovercomponent/Apparelhover";
import Accessorieshover from "../hovercomponent/Accessorieshover";
import { useContext } from "react";
import { ContentContext } from "../context/Content";
import Logout from "./Logout";
import Profile from "./Profile";
function Navbar(){
    const {user}= useContext(ContentContext);
    const [hover,setHover]=useState(false);
    const [hover1,setHover1]=useState(false);
    function handleHover(){
        setHover(!hover);
    }
    function handleHover1(){
        setHover1(!hover1);
    }

 return(<>
 <div className="w-full  border h-20 border-slate-400 bg-stone-600 flex flex-row items-center text-white justify-center relative">
<h1 className="text-2xl ">NevStore</h1>
    <nav className="flex justify-center w-full  ">
        <ul className="flex items-center gap-5 ">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li className="relative">
                <Link to="/apperal"><button onMouseEnter={handleHover1} className="text-black sticky">Apparel</button></Link>
            </li>
            <li className="relative">
                <Link to="/accessories"><button onMouseEnter={handleHover}>Accessories</button></Link>
            
            </li>
            <li>
                <Link to="/Electronic">Electronic</Link>
            </li>
        </ul>
        <div onMouseLeave={handleHover1} className="absolute py-8"> {hover1 && <Apparelhover/>}</div>
        <button onMouseLeave={handleHover} className="absolute py-8">
         {hover && <Accessorieshover/>}
        </button>
    </nav>
{user? <Profile/>:<div> <Link to="/login" className="relative"><IoLogInOutline size={30} className="items-center absolute top-0 right-0"></IoLogInOutline></Link></div> }
 </div>
 </>
 )
}
export default Navbar;