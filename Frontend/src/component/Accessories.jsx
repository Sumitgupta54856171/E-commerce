function Accessories() {
    // Placeholder data for demonstration, mimicking products from the image
    // Prices converted to approximate Indian Rupees for demonstration
    const accessories = [
        {
            id: 1,
            name: "Hydro Flask Water Bottle", // Updated name for a real product
            price: "₹2,900", // Updated price in INR (approx. 34.95 USD)
            imageUrl: "https://images.unsplash.com/photo-1621252723620-3168a2d1d4f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real water bottle
        },
        {
            id: 2,
            name: "Classic Leather Handbag", // Updated name
            price: "₹29,000", // Updated price in INR (approx. 349.00 USD)
            imageUrl: "https://images.unsplash.com/photo-1594938634591-62d4e680a672?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real handbag
        },
        {
            id: 3,
            name: "Minimalist Analog Watch", // Updated name
            price: "₹15,800", // Updated price in INR (approx. 189.99 USD)
            imageUrl: "https://images.unsplash.com/photo-1523275371280-87714856f709?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real watch
        },
        {
            id: 4,
            name: "Urban Roll-Top Backpack", // Updated name
            price: "₹8,300", // Updated price in INR (approx. 99.99 USD)
            imageUrl: "https://images.unsplash.com/photo-1558769132-cb1efb794273?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real backpack
        },
        {
            id: 5,
            name: "Waterproof Travel Bag", // Updated name
            price: "₹6,200", // Updated price in INR (approx. 75.00 USD)
            imageUrl: "https://images.unsplash.com/photo-1560790671-b76ed316738f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real dry bag
        },
        {
            id: 6,
            name: "Designer Sunglasses", // Updated name
            price: "₹9,900", // Updated price in INR (approx. 120.00 USD)
            imageUrl: "https://images.unsplash.com/photo-1572635196232-a502a5e4d1f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real sunglasses
        },
        {
            id: 7,
            name: "True Wireless Earbuds", // Updated name
            price: "₹10,800", // Updated price in INR (approx. 129.99 USD)
            imageUrl: "https://images.unsplash.com/photo-1606220800361-9c600109d375?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real earbuds
        },
        {
            id: 8,
            name: "Classic Leather Wallet", // Updated name
            price: "₹3,700", // Updated price in INR (approx. 45.00 USD)
            imageUrl: "https://images.unsplash.com/photo-1552054929-1a3f6f1c4a0a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real wallet
        },
        {
            id: 9,
            name: "Compact Power Bank", // Updated name
            price: "₹2,900", // Updated price in INR (approx. 35.00 USD)
            imageUrl: "https://images.unsplash.com/photo-1605335192663-e3c3d5e2e83e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real power bank
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans"> {/* Lighter background for a cleaner look */}
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"> {/* Increased padding */}
                {/* Page Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Our Accessories
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                    Discover a curated collection of modern and functional accessories designed to complement your lifestyle.
                </p>

                {/* Accessories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"> {/* Increased gap */}
                    {accessories.map((accessory) => (
                        <div
                            key={accessory.id}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                                       transform transition-all duration-300 ease-in-out
                                       hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
                                       flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden"> {/* Increased image height */}
                                <img
                                    src={accessory.imageUrl}
                                    alt={accessory.name}
                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                    // Fallback image in case the main image fails to load
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevents infinite loop
                                        e.target.src = "https://placehold.co/400x400/E0E0E0/000000?text=Image+Missing";
                                    }}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5 flex flex-col flex-grow"> {/* Increased padding */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                                    {accessory.name}
                                </h3>
                                <p className="text-gray-600 font-medium text-2xl mt-auto"> {/* Adjusted font weight and size */}
                                    {accessory.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accessories;