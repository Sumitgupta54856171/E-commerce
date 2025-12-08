import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { useState } from "react";
import Apparelhover from "../hovercomponent/Apparelhover";
import Accessorieshover from "../hovercomponent/Accessorieshover";
import { useContext } from "react";
import { AuthContext } from "../context/Content";

import Profile from "./Profile";
function Navbar(){
    const {userauth}= useContext(AuthContext);
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
                <Link to="/apperal"><button onMouseEnter={handleHover1} className="text-black sticky"  onMouseLeave={handleHover1}>Apparel</button><button onMouseDown={handleHover}><span className="absolute  top-5 w-30 h-10">{hover && <Accessorieshover/>}</span></button></Link>
            </li>
            <li className="relative">
                <Link to="/accessories"><button onMouseEnter={handleHover}>Accessories</button><button onMouseLeave={handleHover}><span><div className="absolute py-8 w-20 h-10 text-center"> {hover1 && <Apparelhover/>}</div></span></button></Link>
            
            </li>
            <li>
                <Link to="/Electronic">Electronic</Link>
            </li>
        </ul>
        
        
    </nav>
    <span >{userauth? <Profile/>:<div> <Link to="/login" className="relative"><IoLogInOutline size={30} className="items-center absolute top-0 right-0"></IoLogInOutline></Link></div> }</span>

 </div>
 </>
 )
}
export default Navbar;