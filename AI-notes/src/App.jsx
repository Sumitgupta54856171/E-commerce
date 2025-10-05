import Navbar from "./component/Navbar";

import { Route,Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import ShoppingCartPage from "@/component/Card.jsx";
import Authprovider from "./context/Authprovider";
import Electron from "@/component/Electron.jsx";
import ProductList from "@/component/List.jsx";
import ProductDetail from "@/component/Productdetail.jsx";
function App(){


  return(<>
<Authprovider>
  <div className="">
  <Navbar></Navbar>
  <Routes>
      <Route path="/product" element={<ProductDetail/>}></Route>
      <Route path="/list" element={<ProductList/>}></Route>
      <Route path="/cart" element={<ShoppingCartPage/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/Electronic" element={<Electron/>}></Route>
   </Routes>
  </div>
  </Authprovider>
  </>)
}
export default App;