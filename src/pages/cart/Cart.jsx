import React, { useContext } from 'react'
import { StoreContext } from '../../Storecontext'

const Cart = () => {

  const {cartitems,food_list,removeFromCart} = useContext(StoreContext)
  return (
    <div className='mt-[100px]'>
      <div>
        <div className='grid grid-cols-6'>
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartitems[item._id]>0)
          {
            return(
              <div className='grid grid-cols-6 gap-3 space-y-3 mt-4'>
                <img className='w-[50px]' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>${item.price*cartitems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart