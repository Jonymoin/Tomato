import {assets} from '../assets/assets';

const Header = () => {
  return (
    <div>
        <div className='relative'>
            <img src={assets.header_img} alt="" />
            <div className='absolute text-center top-10 left-0 right-0 text-white'>
             <div className='w-full mx-auto gap-5'>
             <h3>Order Your Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repellat rerum voluptates ipsum natus tenetur porro! In autem iure accusamus!</p>
            <button className='px-4 py-2 border rounded-2xl hover:bg-slate-500 hover:bg-opacity-25'>viewMenu</button>
             </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header