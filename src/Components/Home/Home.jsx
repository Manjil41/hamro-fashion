import React from 'react'
import Flashsale from '../Flash sale section/Flashsale'
import Feature from '../Feature-models/Feature'
import MensFashion from '../Men Section/MensFashion'
import WomensWear from '../Women Section/WomensWear'
import Promobanner from '../Promo section/Promobanner'
import NewArrival from '../New Arrival/NewArrival'

const Home = () => {
  return (
    <>
    {/* Hero-section  */}
      <div className="mx-6 bg-hero-pattern relative -z-10 bg-no-repeat bg-cover mb-4">
    <div className='bg-star bg-no-repeat bg-cover z-10'>
      <div className="flex items-center">
        <div className="md:w-1/2 p-16 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Discover the Latest Collection of Fashion</h1>
          <p className="text-lg mb-4">Stay ahead of the fashion game with our new arrivals. Explore the latest styles and find your perfect look.</p>
          <button className=" bg-black text-base text-white rounded-full p-3 w-36 hover:bg-slate-800 mb-14">SHOP NOW</button>
          <div className="flex items-center mt-4">
            <div className="flex -space-x-2">
              <img className="w-11 h-11 rounded-full border-2 border-blue-600" src="./Home-section/customer-1.png" alt="Customer 1" />
              <img className="w-11 h-11 rounded-full border-2 border-blue-600" src="./Home-section/customer-2.png" alt="Customer 2" />
              <img className="w-11 h-11 rounded-full border-2 border-blue-600" src="./Home-section/customer-3.png" alt="Customer 3" />
            </div>
            <span className="ml-3"><pre className='font-sans text-3xl font-bold'>100+</pre>Happy Customer</span>
          </div>
        </div>
          
        <div className="flex justify-center bg-model-bg bg-no-repeat mt-11 -z-[1] max-h-dvh ">
          <img src="./Home-section/boy-girl.png" alt="Fashion Models" className="rounded-lg object-cover" />
        </div>
        </div>
      </div>
    </div>
     {/* Hero-section  */}



    {/* policy section  */}
    <div className='bg-white rounded-2xl p-4 flex justify-around items-center border-2 mx-24 mb-8 mt-14'>
    <div className="flex flex-row items-center text-center justify-between gap-2">
      <img src="./shipping-logo.svg" alt="shipping logo" />
      <div className='flex flex-col justify-center items-start'>
        <h2 className="text-xl font-bold">Free Shipping</h2>
        <p className="text-gray-500">On orders over NRP 5000</p>
      </div>
      </div>
      <div className="w-px bg-gray-300 h-10"></div>
      <div className="flex flex-row items-center text-center justify-between gap-2">
        <img src="./return-logo.svg" alt="return" />
        <div className='flex flex-col justify-center items-start'>
          <h2 className="text-xl font-bold">Return Policy</h2>
          <p className="text-gray-500">14 days return</p>
        </div>
      </div>
      <div className="w-px bg-gray-300 h-10"></div>
      <div className="flex flex-row items-center text-center justify-between gap-2">
        <img src="./nepal-map.svg" alt="map" />
        <div className='flex flex-col justify-center items-start'>
          <h2 className="text-xl font-bold">Nepali delivery</h2>
          <p className="text-gray-500">Free delivery within 7 days</p>
        </div>
      </div>
      <div className="w-px bg-gray-300 h-10"></div>
      <div className="flex flex-row items-center text-center justify-between gap-2">
        <img src="./refund.svg" alt="refund" />
        <div className='flex flex-col justify-center items-start'>
          <h2 className="text-xl font-bold">Refund Policy</h2>
          <p className="text-gray-500">60 days return for any reason</p>
        </div>
      </div>
    </div>

      {/* policy section  */}

      <Flashsale/>
      <Feature/>
      <MensFashion/>
      <WomensWear/>
      <Promobanner/>
      <NewArrival/>
    </>
  )
}

export default Home
