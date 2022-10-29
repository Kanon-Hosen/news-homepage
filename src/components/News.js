import React from 'react';
import img1 from '../assets/images/image-gaming-growth.jpg'
import img2 from '../assets/images/image-retro-pcs.jpg'
import img3 from '../assets/images/image-top-laptops.jpg'
const News = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-14 mb-14 h-38 py-3 overflow-hidden gap-5'>
            <div className='flex gap-5 cursor-pointer hover:shadow transition-shadow-md h-32'>
                <img className='w-32' src={img2} alt="" />
                <div>
                <p className='text-gray-400 text-3xl font-semibold'>01</p>
                <p className='font-semibold text-slate-900 text-base mt-4 hover:text-red-500 transition-colors'> Reviving Retro PCs</p>
                <p className='text-sm text-gray-500 mt-2'>What happens when old PCs are given modern upgrades?</p>
            </div>
            </div>
            <div className='flex gap-5 cursor-pointer hover:shadow transition-shadow-md h-32'>
                <img className='w-32' src={img3} alt="" />
                <div>
                <p className='text-gray-400 text-3xl font-semibold'>02</p>
                <p className='font-semibold text-slate-900 text-base mt-4 hover:text-red-500 transition-colors'>Top 10 Laptops of 2022</p>
                <p className='text-sm text-gray-500 mt-2'>Our best picks for various needs and budgets</p>
            </div>
            </div>
            <div className='flex gap-5 cursor-pointer hover:shadow transition-shadow-md h-32'>
                <img className='w-32' src={img1} alt="" />
                <div>
                <p className='text-gray-400 text-3xl font-semibold'>03</p>
                <p className='font-semibold text-slate-900 text-base mt-4 hover:text-red-500 transition-colors '>  The Growth of Gaming</p>
                <p className='text-sm text-gray-500 mt-2'>How the pandemic has sparked fresh opportunities.</p>
            </div>
            </div>
        </div>
    );
};

export default News;