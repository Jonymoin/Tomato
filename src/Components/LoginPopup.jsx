import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Sign up")
  return (
    <div className='absolute w-[100%] h-[100%] grid z-10 bg-[#00000090]'>
        <form className='flex flex-col w-[350px] h-[400px] gap-3 p-4 rounded-md bg-white place-self-center'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-[22px]'>
                    {currentState}
                </h2>
                <img className='w-[16px] h-[22px] cursor-pointer' src={assets.cross_icon} onClick={()=>setShowLogin(false)} />
            </div>
            <div className='flex flex-col gap-3'>
                {currentState==="Login"?<></>:<input className='border p-2 rounded-lg text-black' type="text" placeholder='your name' required />}
                
                <input className='border p-2 rounded-lg text-black' type="email" placeholder='your email' required />
                <input className='border p-2 rounded-lg text-black' type="password" placeholder='password' required />
            </div>
            <button className='bg-orange-600 py-2 rounded-xl text-white'>{currentState==="Sign up"?"Create Account":"Login"}</button>
            <div className='flex gap-2'>
                <input type="checkbox" required/>
                <p>i agree on terms and condition</p>
            </div>
            {currentState==="Login"? <p>Create anew Account? <span className='text-orange-500 cursor-pointer' onClick={()=>setCurrentState("Sign up")}>Click here</span></p>:
            <p>Already have an accopunt? <span className='text-orange-500 cursor-pointer' onClick={()=>setCurrentState("Login")}>Login here</span></p>}
           
            
        </form>
    </div>
  )
}

export default LoginPopup