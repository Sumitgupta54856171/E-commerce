function Apparel() {
    // Data for apparel items, with prices in Indian Rupees (INR)
    const apparels = [
        {
            id: 1,
            name: "Classic Denim Jacket",
            price: "₹3,500",
            imageUrl: "https://images.unsplash.com/photo-1543087903-1acf8d94c798?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Denim jacket
        },
        {
            id: 2,
            name: "Men's Casual Shirt",
            price: "₹1,200",
            imageUrl: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9ed6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Casual shirt
        },
        {
            id: 3,
            name: "Women's Summer Dress",
            price: "₹1,800",
            imageUrl: "https://images.unsplash.com/photo-1548480396-7c09e3e7f42d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Summer dress
        },
        {
            id: 4,
            name: "Comfortable Hoodie",
            price: "₹2,500",
            imageUrl: "https://images.unsplash.com/photo-1620799140306-ce924e2c2266?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Hoodie
        },
        {
            id: 5,
            name: "Slim Fit Jeans",
            price: "₹2,800",
            imageUrl: "https://images.unsplash.com/photo-1565011721019-d956ac4e21a4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Jeans
        },
        {
            id: 6,
            name: "Elegant Ethnic Kurta",
            price: "₹1,500",
            imageUrl: "https://images.unsplash.com/photo-1603417319451-b8429b533f81?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Kurta
        },
        {
            id: 7,
            name: "Sportswear Tracksuit",
            price: "₹4,200",
            imageUrl: "https://images.unsplash.com/photo-1605335193911-30113c2c10c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Tracksuit
        },
        {
            id: 8,
            name: "Women's Printed Top",
            price: "₹950",
            imageUrl: "https://images.unsplash.com/photo-1596752003713-2ce451bfd237?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Printed top
        },
        {
            id: 9,
            name: "Kid's Playful T-shirt",
            price: "₹700",
            imageUrl: "https://images.unsplash.com/photo-1625946116812-706f9d3b841a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Kid's t-shirt
        },
        {
            id: 10,
            name: "Formal Blouse",
            price: "₹1,600",
            imageUrl: "https://images.unsplash.com/photo-1563235659-c70a83017a41?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Blouse
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Page Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Our Apparels
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                    Explore our latest collection of stylish and comfortable apparel for every occasion.
                </p>

                {/* Apparels Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {apparels.map((apparel) => (
                        <div
                            key={apparel.id}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                                       transform transition-all duration-300 ease-in-out
                                       hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
                                       flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={apparel.imageUrl}
                                    alt={apparel.name}
                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                    // Fallback image in case the main image fails to load
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevents infinite loop
                                        e.target.src = "https://placehold.co/400x400/E0E0E0/000000?text=Image+Missing";
                                    }}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                                    {apparel.name}
                                </h3>
                                <p className="text-gray-600 font-medium text-2xl mt-auto">
                                    {apparel.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Apparel;