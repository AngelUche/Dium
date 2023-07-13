import { NavLink } from "react-router-dom"
import { useState } from "react"
import Cart from "../../assets/Images/cart.png"
import {AiOutlineSearch} from 'react-icons/ai'
import dium from '../../assets/Images/capture-removebg-preview.png'
import { useNavigate } from "react-router-dom"


export const PageNavigations = () => {
  const [searchvalue, setSearchValue] = useState('search')
const navigateTo =useNavigate()


  return (
    <div className=" h-max  py-2 pt-8 border-b-2 border-2">
      <header className="flex flex-row justify-evenly items-center">
        <ul className="flex gap-[1px] justify-center items-center hover:cursor-pointer"
        onClick={()=>navigateTo('/home')}
        >
        <div className="h-8 w-8 overflow-hidden" >
          <img src={dium} alt="logo" className="h-full w-full"/>
        </div>
        <p className="text-[11px] font-serif font-semibold border-[#311180]">DIUM</p>
      </ul>
        <ul className="flex justify-between gap-x-6">
          <li>
            <NavLink to="/home"  className={({ isActive }) =>
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
            <NavLink to="/shop"  className={({ isActive }) =>
              ` text-black flex duration-500 hover:transition-all text-[14px]
            justify-start items-center gap-5 
             ${isActive ? "text-[#311180]  border-b-2 border-[#311180] font-font-[550] " : undefined}`
            }>
              Products
            </NavLink>
          </li>
            
        </ul>
        <ul className="flex gap-x-7  justify-center items-center">
          <div className="relative  flex justify-around items-center box-border bg-red-40 w-[130px]">
              <AiOutlineSearch size={23} color="#311180" className="absolute left-1"   />
          <input type='text' value={searchvalue} id="search" onChange={(e)=>setSearchValue(e.target.value)}  className="text-black text-end focus:outline-none  border-[1px] rounded-md border-gray-200 px-3 pl-6 w-[100%]  " />
          </div>
          <div className="w-6 h-6  overflow-hidden justify-center items-center relative">
            <img src={Cart} alt="cart" className="w-full "/>
          </div>
          <button className="px-5 py-[6px] rounded-[13px] text-white text-[12px] bg-[#311180]  ">Get started</button>
        </ul>
      </header>
    </div>
  )
}


