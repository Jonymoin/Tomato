import React, { useContext } from 'react'
import { StoreContext } from '../Storecontext'
import Fooditem from './Fooditem'

const Fooddisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div>
        <h2 className='text-center font-bold text-xl'>Top dishes near you</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            {food_list.map((item,index)=>{
              if (category==="All" || category===item.category) {
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
                
            }
            )
            }
        </div>
    </div>
  )
}

export default Fooddisplay