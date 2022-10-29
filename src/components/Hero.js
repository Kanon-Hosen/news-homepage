import React from "react";
import HeroBg from '../assets/images/image-web-3-desktop.jpg'
const Hero = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between gap-8 flex-col md:flex-row ">
        <div className="md:w-9/12 w-full">
          <div>
            <img className="h-96 md:h-80 object-cover" src={HeroBg} alt="" />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 mt-10 md:h-32 overflow-hidden h-full">
          <div className="md:w-2/5 w-full">
              <p className="text-black text-4xl font-bold">The Bright Future of Web 3.0?</p>
            </div>
            <div className="md:w-3/5 w-full flex flex-col justify-between">
              <p className="text-gray-500 text-sm"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className="mt-8 md:mt-0 tracking-wider py-3 bg-red-500 w-1/2 flex items-center justify-center text-gray-100 font-semibold hover:bg-black transition-colors hover:text-gray-50">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 w-full bg-slate-900 p-3 flex justify-between flex-col">
          <h1 className="text-3xl font-semibold text-orange-400">New</h1>
          <div className="mt-4 mb-4">
            <p className="font-semibold text-gray-100 text-base hover:text-orange-400 cursor-pointer transition-colors">Hydrogen VS Electric Cars</p>
            <p className="mt-2 text-gray-300 text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr className="w-full bg-gray-300" />
          <div className="mt-4 mb-4">
            <p className="font-semibold text-gray-100 text-base hover:text-orange-400 transition-colors cursor-pointer">The Downsides of AI Artistry</p>
            <p className="mt-2 text-gray-300 text-sm">What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <hr className="w-full bg-gray-300" />
          <div className="mt-4 mb-4">
            <p className="font-semibold text-gray-100 text-base hover:text-orange-400 transition-colors cursor-pointer"> Is VC Funding Drying Up?</p>
            <p className="mt-2 text-gray-300 text-sm">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
          </div>
      </div>
      </div>

    </div>
  );
};

export default Hero;
