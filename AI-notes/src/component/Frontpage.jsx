// src/App.js or src/pages/Home.js
// This is a sample React component for the front page of your e-commerce platform.
// It uses React, Tailwind CSS, Framer Motion for animations, and React Player for video embedding.
// Install dependencies: npm install framer-motion react-player tailwindcss
// Make sure to configure Tailwind CSS in your project (tailwind.config.js and postcss.config.js).

import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const HomePage = () => {
    // Animation variants for fade-in and slide-up effects
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-purple-600">Your E-Commerce Store</h1>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600">Log In</button>
                        <button className="text-gray-600">☰</button>
                    </div>
                </div>
            </header>

            {/* Hero Section with Video Background and Graphical Animation */}
            <section className="relative h-96 overflow-hidden">
                {/* Background Video */}
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your video URL (e.g., product showcase or promotional video)
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 object-cover"
                />
                {/* Overlay Content with Animation */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <motion.h2
                        className="text-5xl font-bold uppercase"
                        variants={slideUp}
                    >
                        Welcome to Our Store
                    </motion.h2>
                    <motion.p
                        className="text-xl mt-2"
                        variants={slideUp}
                    >
                        Shop Apparel, Accessories, and Electronics
                    </motion.p>
                    <motion.div
                        className="mt-4 flex space-x-4"
                        variants={slideUp}
                    >
                        {/* Social Icons - Add animations on hover */}
                        <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-2xl">𝕏</motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-2xl">f</motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-2xl">▶</motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-2xl">♫</motion.a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Products Section - Similar to "SHOWS" but for product categories */}
            <section className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        Our Products
                    </motion.h2>
                    {/* Product Items with Slide-Up Animation */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        {/* Apparel */}
                        <div className="flex items-center justify-between border-b border-gray-600 pb-4">
                            <div className="flex items-center space-x-4">
                                <img src="https://via.placeholder.com/80?text=Apparel" alt="Apparel" className="w-20 h-20 object-cover rounded" />
                                <div>
                                    <h3 className="text-xl font-semibold">Apparel</h3>
                                    <p className="text-sm">T-shirts, Hoodies, and More</p>
                                </div>
                            </div>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                                Shop Now
                            </button>
                        </div>

                        {/* Accessories */}
                        <div className="flex items-center justify-between border-b border-gray-600 pb-4">
                            <div className="flex items-center space-x-4">
                                <img src="https://via.placeholder.com/80?text=Accessories" alt="Accessories" className="w-20 h-20 object-cover rounded" />
                                <div>
                                    <h3 className="text-xl font-semibold">Accessories</h3>
                                    <p className="text-sm">Bags, Jewelry, and Hats</p>
                                </div>
                            </div>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                                Shop Now
                            </button>
                        </div>

                        {/* Electronics */}
                        <div className="flex items-center justify-between pb-4">
                            <div className="flex items-center space-x-4">
                                <img src="https://via.placeholder.com/80?text=Electronics" alt="Electronics" className="w-20 h-20 object-cover rounded" />
                                <div>
                                    <h3 className="text-xl font-semibold">Electronics</h3>
                                    <p className="text-sm">Gadgets, Phones, and Laptops</p>
                                </div>
                            </div>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                                Shop Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Merch Section - Similar to "MERCH" */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        Featured Items
                    </motion.h2>
                    <p className="text-center mb-8">Discover our latest collections and exclusive deals.</p>

                    {/* Categories with Graphical Animations */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Cap Hats</h3>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                                Get Now
                            </button>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Sweatshirts</h3>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                                Get Now
                            </button>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Electronics</h3>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                                Get Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold mb-2">For Support & Inquiries</h3>
                    <p>info@yourstore.com | Phone: 123-456-7890</p>
                    <p className="mt-4 text-sm">&copy; 2025 Your E-Commerce Store. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2 text-sm">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Shipping & Returns</a>
                        <a href="#">FAQs</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;