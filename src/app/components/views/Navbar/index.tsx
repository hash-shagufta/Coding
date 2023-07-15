"use client"
import { useState } from "react"
import Image from "next/image"
import { BiSearch } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { NavbarItemType, NavbarArray } from "@/app/components/utils/NavbarArrayAndTypes"
import Link from "next/link"
import { HiOutlineChevronDown } from "react-icons/hi"
import DropDown from "../subComponents/DropDown"
import MobileNavbar from "../subComponents/MobileNavbar"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean> (false);
 const [cartItemNumber, setcartItemNumber] = useState<number>(0);

  return (
    <div>
    <div className="py-6  flex justify-between items-center space-x-12">
<div className="w-36 flex-shrink-0">
<Image width={500} height={500} src={"/Logo.webp"} alt="logo"/>
</div>
<div className="hidden lg:flex justify-between items-center w-full">
<ul className="flex space-x-4 front-medium text-lg">
{NavbarArray.map((item: NavbarItemType, index: number) => (
        <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
        <Link href={item.href} > {item.label} </Link>
        {item.isDropDown ?  <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={16}/>: ""} 
        {item.isDropDown && <div className={`invisible  group-hover:visible absolute top-8 py-4 px-6 left-0  bg-gray-100 font-light min-w-[7.8rem]`}>
        <DropDown item={item}/>
        </div>}
        </li>
      ))}
    </ul>
    <div className="border flex items-center text-gray-600 px-3 rounded-md">
      <BiSearch/>
      <input 
      type="text" 
      className="pr-5 py-1"
      placeholder="Search in Our Store"
      />

    </div>


<div className=" flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
<div className="absolute top-1 w-4 h-4 right-2 bg-red-300 text-xs font-light rounded-full flex justify-center items-center">
  {cartItemNumber}
</div>
<BsCart2 size={24}/>
</div>
</div>
<div onClick={() => setNavbarOpen(!isNavbarOpen)}>
{isNavbarOpen ?
<div className="flex lg:hidden">
  <IoMdClose size={29}/>
</div>
  :
  <div className="flex lg:hidden">
  <GiHamburgerMenu  size={25}/>
</div>

}
</div>

    </div>
    {
  isNavbarOpen && <MobileNavbar/>
}
    </div>
  
  )
}


export default Navbar
