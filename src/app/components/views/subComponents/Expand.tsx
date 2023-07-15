import Link from "next/link"
import {  NavbarItemType } from "../../utils/NavbarArrayAndTypes"
import { HiOutlineChevronDown } from "react-icons/hi"
import { FC, useState } from "react"


const Expand: FC<{item:NavbarItemType }> = ({item}) => {
    const [isExpended, setExpended] = useState(false);
    const [isTimeOut, setTimeOut] = useState<boolean>(false);

    function handleExpand()
    {
        setExpended(!isExpended);
        setTimeout(() => {
            setTimeOut(!isTimeOut);
        }, 100);
        
    }




  return (
        <li className={`${isExpended? "h-48" : "h-12"}   list-none`}>
          <div onClick={handleExpand} className="flex hover:bg-purple-500 py-2 px-3  rounded-md duration-300 items-center justify-between">
          <Link href={item.href}>{item.label}</Link>
          {item.isDropDown ?  <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={16}/>: ""} 
          </div>
          <div className="flex flex-col space-y-1 mt-2">
           {isTimeOut && item.dropDownData?.map((subItem: NavbarItemType,index:number)=> (
           <Link key={index} className="hover:bg-gray-200 rounded-md py-1 px-5 duration-300" href={subItem.href}>
           {subItem.label}
           </Link>
        

           )
           
           )}
              
        
    

  </div>
  </li>
  )
}

export default Expand