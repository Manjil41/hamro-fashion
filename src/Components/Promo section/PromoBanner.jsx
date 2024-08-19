import React from 'react'

const Promobanner = () => {
  return (
    <>
      <div className="relative bg-black text-white flex flex-col md:flex-row items-center mb-16">
      {/*(Image Container) */}
      <div className="relative w-full md:w-1/2 h-full opacity-30">
        <img
          src="./promobannerimage.png"
          alt="Promo"
          className="relative inset-0 object-cover w-full h-full"
        />
      </div>
      {/*(Content) */}
      <div className="relative w-full flex flex-col justify-center h-64 p-10 ml-20">
        <h1 className="text-3xl font-bold mb-4">
          GET 20% OFF ON YOUR FIRST DEAL
        </h1>
        <button className="mt-4 px-4 py-3 w-36 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-3xl transition duration-300">
          Order Now
        </button>
      </div>
    </div>
    </>
  )
}

export default Promobanner
