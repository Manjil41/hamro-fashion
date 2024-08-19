import React from 'react'

const NewArrival = () => {
    const products = [
      {
        id: 1,
        name: 'Knitted Joggers',
        image: './New-Arrival/knitted-joggers.png',
      },
      {
        id: 2,
        name: 'Full Sleeve',
        image: './New-Arrival/full-sleeve.png',
      },
      {
        id: 3,
        name: 'Active T-Shirts',
        image: './New-Arrival/active-tshirt.png',
      },
      {
        id: 4,
        name: 'Urban Shirts',
        image: './New-Arrival/urban-shirt.png',
      },
    ];
  return (
    <>
    <div className="bg-white py-10 mx-7">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6 ml-12">New Arrival</h2>

        {/* Carousel */}
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button className="text-2xl p-2 rounded-full border border-gray-300">
            &lt;
          </button>

          {/* Products List */}
          <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-56 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="text-2xl p-2 rounded-full border border-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewArrival
