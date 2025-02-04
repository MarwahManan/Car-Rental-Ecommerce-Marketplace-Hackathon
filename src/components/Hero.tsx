import { Link } from 'lucide-react';
import React from 'react';


const Hero = ()=> {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/*Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/bl.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl w-[272px] font-bold text-[#FFFFFF]  mb-2">
              The Best Platform for Car Rental
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
          
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            
            <img
              src="/image 7.png"
              alt="Car"
              className=" mt-4 w-{340px} h-{108} mx-auto object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md "
            style={{
              backgroundImage: 'url("/br.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
           <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
          
            <img
              src="/image 8.png" 
              alt="Car"
              className=" mt-4 w-{340px} h-{108} mx-auto object-cover"
            />
          </div>
        </div> 
      </section>
   </div>
  );
};

export default Hero;