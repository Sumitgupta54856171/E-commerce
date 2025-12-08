
import React from 'react';

const CategoryGrid = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Shop Our Collections</h1>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 grid grid-row">
              <img src="https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" srcset="https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x" alt="Free Flat lay of travel essentials including airplane model, sunglasses, compass, and hat on a table. Stock Photo" ></img>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Accessories</h2>
                    <p className="text-gray-600 text-sm mb-4">Stylish add-ons to complete your look.</p>
                    <a href="/accessories" className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">View All</a>
                </div>
            </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 grid grid-row-2 gap-7">
               <img src="https://images.hindustantimes.com/tech/img/2020/07/07/1600x900/Panasonic_1594117018731_1594117037452.jpg" alt="Planning to shop? Panasonic has launched new TVs, washing machines ..." class=" nofocus" tabindex="0" aria-label="Planning to shop? Panasonic has launched new TVs, washing machines ..." role="button"></img>
                <div className="p-4 ">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Electronics</h2>
                    <p className="text-gray-600 text-sm mb-4">Innovate your life with our tech.</p>
                    <a href="/electronics" className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">View All</a>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 grid grid-row-2 gap-14">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDykslgE83yWvgu2tU69olaeqOVIFdwPeLyg&s" ></img>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Apparel</h2>
                    <p className="text-gray-600 text-sm mb-4">Trendy fashion for every occasion.</p>
                    <a href="/apparel" className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors ">View All</a>
                </div>
            </div>
            </div>
    </div>
  );
};

export default CategoryGrid;