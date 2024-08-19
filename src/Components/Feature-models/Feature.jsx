import React from 'react'

const Feature = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg overflow-hidden mb-20">
      {/* Left Side - Text Content */}
      <div className=" w-2/5 h-3/4 p-8 bg-center" style={{ backgroundImage: 'url("./Feature-section/cover-feature.png")' }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-md mx-7">
          <h2 className="text-white text-3xl font-bold mb-4">YOUR OUTFIT EXPRESS WHO YOU ARE</h2>
          <p className="text-gray-300 mb-6">
            Fashion is a way for people to express themselves and show their independence during a specific time period.
          </p>
          <button className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-100">Explore Now</button>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="w-2/5 h-2/5">
        <img
          className="w-full h-full object-cover"
          src="./Feature-section/spider-gf.png"
          alt="zendya"
        />
      </div>
    </div>
    </>
  )
}

export default Feature
