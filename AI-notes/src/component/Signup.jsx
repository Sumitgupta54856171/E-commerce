import { useState } from "react";
import { AuthContext } from "../context/Content";
import { useContext } from "react";
import axios from 'axios';
function Signup(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');
    const {signup,message} = useContext(AuthContext);
    
    async function handleClick(event){
        event.preventDefault();
       
        signup(username,email,password,role);
    }
    
    
    return (
        <>
        
        <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 md:p-8">

<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
    Naya Account Banayein! ✨{message}
</h2>


    <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
            Poora Naam
        </label>
        <input type="text" id="name" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Apna naam likhein" onChange={(e)=>setUsername(e.target.value)} value={username}/>
    </div>
<form onSubmit={handleClick}>
    <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email Address
        </label>
        <input type="email" id="email" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Apni Email ID daalein"onChange={(e)=>setEmail(e.target.value)} value={email}/>
    </div>

    <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
        </label>
        <input type="password" id="password" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ek strong password banayein" onChange={(e)=>setPassword(e.target.value)} value={password}/>
    </div>

    <div className="mb-6">
        <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-semibold mb-2">
            role
        </label>
        <input type="text" id="confirm-password" value={role} onChange={(e)=>setRole(e.target.value)}className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Password dobara daalein"/>
    </div>

    <div className="flex items-center justify-between">
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full transition duration-200">
            Sign Up Karein!
        </button>
    </div>
    </form>
    <p className="text-center text-gray-600 text-sm mt-6">
        Already have an account?
        <a href="/login" className="text-blue-500 hover:text-blue-800 font-semibold">
            Login here
        </a>
    </p>
</div>
</div>
        </>
    )
}
export default Signup;