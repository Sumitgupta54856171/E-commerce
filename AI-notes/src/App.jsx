import Navbar from "./component/Navbar";
import {useEffect, useState} from 'react'
import { Route,Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import { ContentContext } from "./context/Content";
import axios from "axios";
function App(){
const [user,setUser] =useState(false);
useEffect(()=>{
  const checkAuthentication=async ()=>{
    const response = await axios.get('http://localhost:3000/api/verify', {withCredentials: true});
    console.log(response);
    console.log(response.data.user)
    console.log('successfull');
    if(response.data.user.username !== null && response.data.user.username !== undefined){
        setUser(true);
    }
}
checkAuthentication();
},[user])
  return(<>
  <ContentContext.Provider value={{user,setUser}}>
  <div className="">
  <Navbar></Navbar>
  <Routes>
   <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
   </Routes>
  </div>
  </ContentContext.Provider>
  </>)
}
export default App;