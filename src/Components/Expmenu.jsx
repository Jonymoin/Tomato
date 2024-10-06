import { menu_list } from "../assets/assets"

const Expmenu = ({category,setCategory}) => {
  return (
    <div>
        <h1 className="text-center">Explore Our Menu</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium necessitatibus possimus consequatur ipsa reiciendis aperiam illo cupiditate labore?</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {menu_list.map((item,index)=>{
                return (
                   <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                      <img className={category===item.menu_name?" rounded-[50%] border-blue-700 border-[5px] p-1":""} src={item.menu_image} alt="" />
                      <p className="text-center">{item.menu_name}</p>
                   </div>
                )
            })}
        </div>
    </div>
  )
}

export default Expmenu