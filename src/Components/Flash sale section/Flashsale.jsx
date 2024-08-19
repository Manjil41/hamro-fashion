import React from 'react'
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/16/solid'

const products = [
    {
      id: 1,
      name: 'Black Jacket',
      brand: 'Patagonia Brand',
      price: 'NPR 699',
      rating: 4.2,
      imageUrl: './Flash-sale-section/model-1.png',
    },
    {
      id: 2,
      name: 'Trendy Summer Top',
      brand: 'AS’s Brand',
      price: 'NPR 499',
      rating: 4.5,
      imageUrl: './Flash-sale-section/model-2.png',
    },
    {
      id: 3,
      name: 'Jeans Pants',
      brand: 'MM’s Brand',
      price: 'NPR 999',
      rating: 5.0,
      imageUrl: './Flash-sale-section/model-3.png',
    },
    {
      id: 4,
      name: 'Hoodie',
      brand: 'Nike’s Brand',
      price: 'NPR 1800',
      rating: 3.5,
      imageUrl: './Flash-sale-section/model-4.png',
    },
  ];
  

const Flashsale = () => {
  return (
    <>
       <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          ⚡ Flash Sale
        </h2>
        <div className="flex space-x-2 text-red-500 text-lg">
          <div>08</div>:<div>48</div>:<div>34</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg relative">
            <div className='relative'> 
            <img className="w-72 h-96 object-cover rounded-t-lg" src={product.imageUrl} alt={product.name} />
            <div className="absolute top-2 right-6 flex  flex-col gap-4">
              <button className="bg-white rounded-full p-2 shadow">
                <HeartIcon className=" text-gray-600" />
              </button>
              <button className="bg-white rounded-full p-2 shadow">
                <ShoppingCartIcon className="w-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute bottom-2 left-5 bg-white text-purple-500 rounded-full px-2 py-1 flex items-center">
              <StarIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">{product.rating}</span>
            </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <div>

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
                </div>
              <div className="mt-2 text-sm font-bold bg-slate-100 rounded-md p-2">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Flashsale
