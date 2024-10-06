import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className='bg-slate-700'>
        <div className='wrapper w-[80%] mx-auto gap-4 flex flex-col md:flex-row py-4 '>
            <div className='w-full md:w-1/2 space-y-4'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure delectus dolores magni velit, tempora eveniet nulla voluptates vitae? Error itaque autem soluta facere! Veniam molestias suscipit ab consequuntur, eveniet atque ipsam, unde cupiditate qui nulla ex. Provident, eos ullam?
                </p>
                <div className='flex gap-4 items-center justify-center'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className='w-full md:w-1/2 md:flex-row flex flex-col space-y-5 items-center justify-center'>
                <div className='text-white flex flex-col md:w-1/2'>

                <h2 className='font-bold text-2xl'>Company</h2>
                   <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Delivery
                    </li>
                    <li>Privacy Policy</li>
                   </ul>
                </div>

                <div className='md:w-1/2 text-white flex flex-col'>
                    <h2 className='font-bold text-2xl'>Get in touch</h2>

                    <ul>
                        <li>01827030444</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <hr className='w-full  bg-white'/>
           <div className='text-white text-center'>
            copyright@tomato
           </div>
    </div>
  )
}

export default Footer