import React from 'react'
import logo from '../../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";


const Nabvar = () => {
  return (
        <nav  className='absolute top-0 left-0 w-full'>
            <div className="container">
                <div className="nav_main flex justify-between items-center p-[10px]">
                    <div className='w-1/4'>
                    <img src={logo} alt="logo" />
                    </div>
                    <div className='w-2/4'>
                    <ul className='flex justify-center items-center gap-[30px] text-[18px] font-paragraph font-medium text-white'>
                        <li className='cursor-pointer flex items-center gap-[10px]'>Home <IoIosArrowDown /></li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer flex items-center gap-[10px]'>Service <IoIosArrowDown /></li>
                        <li className='cursor-pointer flex items-center gap-[10px]'>Pages <IoIosArrowDown /></li>
                        <li className='cursor-pointer'>Blog</li>
                    </ul>
                    </div>
                    <div className='w-1/4 text-[18px] font-paragraph font-medium flex items-center gap-[20px]'>
                    <button className='text-white'>Login</button>
                    <button className='text-primary bg-secondary py-[15px] px-[35px] rounded-[15px] border  border-secondary hover:bg-transparent hover:text-secondary ease-in duration-300'>Registration</button>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Nabvar