import Navbar from "./component/Navbar";

import { Route,Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";

import Authprovider from "./context/Authprovider";
function App(){


  return(<>
<Authprovider>
  <div className="">
  <Navbar></Navbar>
  <Routes>
   <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
   </Routes>
  </div>
  </Authprovider>
  </>)
}
export default App;