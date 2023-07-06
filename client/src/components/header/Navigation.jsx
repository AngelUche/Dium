import { NavLink } from "react-router-dom"
import { useState } from "react"
export const PageNavigations = () => {
  const [searchvalue, setSearchValue] = useState('')
  console.log(searchvalue);
  return (
    <div className=" h-max  py-2 pt-8 border-b-2 border-2">
      <header className="flex flex-row justify-evenly items-center">
      <ul className="flex gap-1 justify-center items-center">
        <div className="h-8 w-8 overflow-hidden" >
          <img src="" alt="logo" className="h-full w-full"/>
        </div>
        <p>DIUM</p>
      </ul>
        <ul className="flex justify-between gap-x-6">
          <li>
            <NavLink to="/"  className={({ isActive }) =>
              ` text-black flex duration-500 hover:transition-all text-[14px]
            justify-start items-center gap-5 
             ${isActive ? "text-[#311180]  border-b-2 border-[#311180] font-[550]" : undefined}`
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus"  className={({ isActive }) =>
              ` text-black flex duration-500 hover:transition-all text-[14px]
            justify-start items-center gap-5
             ${isActive ? "  text-[#311180]  border-b-2 border-[#311180] font-font-[550]" : undefined}`
            }>
              About Us
            </NavLink>
          </li>
            <li>
            <NavLink to="/aboutus"  className={({ isActive }) =>
              ` text-black flex duration-500 hover:transition-all text-[14px]
            justify-start items-center gap-5 
             ${isActive ? "text-[#311180]  border-b-2 border-[#311180] font-font-[550] " : undefined}`
            }>
              Products
            </NavLink>
          </li>
            
        </ul>
        <ul className="flex gap-x-7">
          <input type="search" name="search" id="search" onChange={(e)=>setSearchValue(e.target.value)}  className="text-black focus:outline-none  w-[120px] text-center  " />
          <div className="w-6 h-6  overflow-hidden justify-center items-center">
            <img src="" alt="cart" className="w-full "/>
          </div>
          <button className="px-5 py-[6px] rounded-[13px] text-white text-[12px] bg-[#311180]  ">Get started</button>
        </ul>
      </header>
    </div>
  )
}


