import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import Home from "./pages/home/Home";
import {Route , Routes} from 'react-router-dom'
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup";

function App() {

  const [showLogin,setShowLogin] = useState(false)
  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className="w-[80%] mx-auto">
     
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="/cart" element={<Cart /> } />
       <Route path="/order" element={<Placeorder />} />
     </Routes>
   </div>

   <Footer />
    </>
   
  );
}

export default App;
