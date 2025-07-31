function Electron() {
    // Data for electronic items, with prices in Indian Rupees (INR)
    const electronics = [
        {
            id: 1,
            name: "Noise-Cancelling Headphones",
            price: "₹12,500",
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06f2e0?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Headphones
        },
        {
            id: 2,
            name: "Portable Bluetooth Speaker",
            price: "₹4,999",
            imageUrl: "https://images.unsplash.com/photo-1545128038-1644788c6e28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Bluetooth speaker
        },
        {
            id: 3,
            name: "Smartwatch with Heart Rate",
            price: "₹8,999",
            imageUrl: "https://images.unsplash.com/photo-1617042375876-a145e35378c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Smartwatch
        },
        {
            id: 4,
            name: "Wireless Charging Pad",
            price: "₹1,850",
            imageUrl: "https://images.unsplash.com/photo-1620000713583-16a2d21e0a29?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Wireless charger
        },
        {
            id: 5,
            name: "Compact Digital Camera",
            price: "₹22,000",
            imageUrl: "https://images.unsplash.com/photo-1510125585713-3ac5e6d0130d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Digital camera
        },
        {
            id: 6,
            name: "Ergonomic Gaming Mouse",
            price: "₹3,200",
            imageUrl: "https://images.unsplash.com/photo-1603893323086-6302f37c3539?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Gaming mouse
        },
        {
            id: 7,
            name: "High-Resolution Monitor",
            price: "₹18,000",
            imageUrl: "https://images.unsplash.com/photo-1549420600-e74360e20083?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Monitor
        },
        {
            id: 8,
            name: "Mechanical Gaming Keyboard",
            price: "₹7,500",
            imageUrl: "https://images.unsplash.com/photo-1587823522271-e0c46b5a34f4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Mechanical keyboard
        },
        {
            id: 9,
            name: "Smart Home Assistant",
            price: "₹5,499",
            imageUrl: "https://images.unsplash.com/photo-1621213076595-300c06a88b14?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Smart speaker/assistant
        },
        {
            id: 10,
            name: "Portable SSD 1TB",
            price: "₹9,000",
            imageUrl: "https://images.unsplash.com/photo-1596752003713-2ce451bfd237?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Portable SSD (reused placeholder)
        },
        {
            id: 11,
            name: "Mini Projector",
            price: "₹14,999",
            imageUrl: "https://images.unsplash.com/photo-1596752003713-2ce451bfd237?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Mini projector (reused placeholder)
        },
    ];

    return (
        // The outer div now represents the main content area for this component.
        // It's designed to be used within a larger React app, likely with a parent layout.
        // The background color is lighter to match the clean aesthetic.
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Page Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight text-center sm:text-left">
                    Our Electronics
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
                    Explore the latest in innovation: high-quality electronic gadgets and devices.
                </p>

                {/* Electronics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {electronics.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                                       transform transition-all duration-300 ease-in-out
                                       hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
                                       flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
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
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 font-medium text-2xl mt-auto">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Electron;