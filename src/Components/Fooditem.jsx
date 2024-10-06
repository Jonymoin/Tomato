import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../Storecontext'

const Fooditem = ({id,name,price,description,image}) => {

  const {cartitems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='p-4 shadow-2xl group'>
       <div className='relative'>
         <img src={image} alt="" className='rounded-md group-hover:scale-90 ease-linear duration-200 cursor-pointer' />
         {!cartitems[id]
         ? <img className='absolute w-[35px] bottom-[15px] right-[35px] ' src={assets.add_icon_white} alt="" onClick={()=>addToCart(id)}/>
         : <div className='absolute flex items-center justify-center gap-1 px-2 py-1 rounded-full bottom-[15px] right-[35px] bg-white'>
            <img className='w-[25px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p className='font-bold'>{cartitems[id]}</p>
            <img className='w-[25px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
         </div>

         }
       </div>
       <div>
        <div>
            <p className='font-bold'>
                {name}
            </p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p>{description}</p>
        <p className='font-bold'>
            ${price}
        </p>
       </div>

    </div>
  )
}

export default Fooditem