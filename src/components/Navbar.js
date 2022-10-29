import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'
const Navbar = () => {
    const [toggle, setToggle] =useState(true)
    return (
        <div className='flex items-center h-20 justify-between relative'>
            <div>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div className='items-center hidden md:flex  gap-8'>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Home</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>New</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Popular</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Trending</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Category</li>
            </div>
            <div className={` ${toggle? '-right-full' : 'right-0'} transition-transform  first-letter md:hidden flex items-center flex-col absolute top-16  w-3/5 bg-white h-screen p-5 gap-8`}>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Home</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>New</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Popular</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Trending</li>
                <li className='list-none cursor-pointer text-gray-600 hover:text-red-500 transition-colors'>Category</li>
            </div>
            <div onClick={()=>setToggle(!toggle)} className="block md:hidden">
                {
                 toggle ? <img className='cursor-pointer' src={menu} alt="" /> :
                <img className='cursor-pointer' src={close} alt="" />
                        
                        
                }
            </div>
        </div>
    );
};

export default Navbar;