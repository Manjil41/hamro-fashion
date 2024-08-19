import React from 'react'

const products = [
    {
      id: 1,
      name: 'Hoodies & Sweetshirt',
      tag: 'Explore Now!',
      imageUrl: './Womens-Wear/womens-model-1.png',
    },
    {
      id: 2,
      name: 'Coats & Parkas',
      tag: 'Explore Now!',
      imageUrl: './Womens-Wear/womens-model-2.png',
    },
    {
      id: 3,
      name: 'Tees & T-Shirt',
      tag: 'Explore Now!',
      imageUrl: './Womens-Wear/womens-model-3.png',
    },
    {
      id: 4,
      name: 'Boxers',
      tag: 'Explore Now!',
      imageUrl: './Womens-Wear/womens-model-4.png',
    },
  ];
const WomensWear = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-lg mb-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          Women's Wear
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg relative">
            <div className='relative'> 
            <img className="w-72 h-96 object-cover rounded-t-lg" src={product.imageUrl} alt={product.name} />
            </div>
            <div className="mt-4 flex justify-between items-center">
                <div>

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.tag}</p>
                </div>
              <div className="mt-2 text-xl font-bold bg-slate-100 rounded-md p-2">
                <img src="./Mens-Fashion/arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default WomensWear
