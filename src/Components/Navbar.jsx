import { useState } from "react";
import {assets} from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [menu , setMenu] = useState("home")
  return (
    <nav className="mx-auto flex items-center justify-between py-5 relative">
      <img src={assets.logo} alt="" className="" />
      <ul className="flex flex-col md:flex-row gap-2 absolute cursor-pointer top-24 md:top-6 md:left-[30%] opacity-0 md:opacity-100 ">
       <Link to='/'> <li onClick={()=>setMenu("home")} className={menu==="home"?" pb-2 border-b-2 border-black":""}>home</li></Link>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"pb-2 border-b-2 border-black":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-2 border-b-2 border-black":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"pb-2 border-b-2 border-black":""}>contact us</li>
       
      </ul>
      <div className="flex gap-4">
        <img src={assets.search_icon} alt="" />
        <div>
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
        </div>
        <button onClick={()=>setShowLogin(true)} className="px-2 py-1 border rounded-full bg-transparent hover:bg-yellow-100 ease-linear transition-all duration-200">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar