
import { useState } from 'react'
import Expmenu from '../../Components/Expmenu'
import Header from '../../Components/Header'
import Fooddisplay from '../../Components/Fooddisplay'

const Home = () => {
    const [category,setCategory] = useState("All")
  return (
    <div>
        
        <Header />
        <Expmenu category={category} setCategory={setCategory} />
        <Fooddisplay category={category} />
    </div>
  )
}

export default Home