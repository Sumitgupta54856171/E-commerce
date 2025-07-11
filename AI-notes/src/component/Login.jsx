import { useState } from "react";
import axios from 'axios';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { redirect } from "react-router-dom";
function Login(){

const [email,setEmail] =useState('');
const [password,setPassword] = useState('');
const [visible,setVisible] =useState(false);
const handleClick =()=>{
    setVisible(!visible);
}
async function handleSubmit(event){
    event.preventDefault();
    const data = {
        email,
        password
    }
    const response = await axios.post('http://localhost:3000/api/login',data, {withCredentials: true})
    console.log(response);
    console.log('successfull')
    const token = response.data.user;
    localStorage.setItem('token',token);
    if(token){
      
        redirect('/');
    }
    else{
       redirect('./login')
    }
}
return(<>
<div className="flex items-center justify-center min-h-screen p-4">
 <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 md:p-8">

<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
    Swagat Hai! 👋
</h2>

<form onSubmit={handleSubmit}>
    <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email Address
        </label>
        <input type="email" id="email" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your Email ID" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>

    <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
        </label>
        <div className="relative">
        <input type={visible ? "text" : "password"} id="password" className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10" placeholder="Password daalo" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={handleClick}>
            {visible ? <IoEye /> : <IoEyeOff />}
        </span>
        </div>
        <a href="#" className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800">
            Password bhool gaye?
        </a>
    </div>

    <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full transition duration-200">
            Chalo Login Karein!
        </button>
    </div>
</form>
    <p className="text-center text-gray-600 text-sm mt-6">
        Naya user?
        <a href="/signup" className="text-blue-500 hover:text-blue-800 font-semibold">
            Register here
        </a>
    </p>

</div>
</div>
</>)
}
export default Login;