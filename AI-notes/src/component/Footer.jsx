function Footer() {
    return (
        <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

                {/* Newsletter Subscription */}
                <div className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe to our newsletter</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            aria-label="Email for newsletter subscription"
                        />
                        <button
                            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg
                                       hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2
                                       transition-colors duration-200"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Products Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Products</h3>
                    <ul className="space-y-2">
                        <li><a href="/apparel" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Apparel</a></li>
                        <li><a href="/accessories" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Accessories</a></li>
                        <li><a href="/electronics" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Electronics</a></li> {/* Added Electronics link */}
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="/features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a></li>
                        <li><a href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Pricing</a></li>
                        <li><a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright and Social/Brand Links */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p>&copy; 2024 Your Next Store</p>
                    <p>Delightful commerce for everyone</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://zaiste.net" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">@zaiste</a>
                    <a href="https://typedofweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">@typedofweb</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;