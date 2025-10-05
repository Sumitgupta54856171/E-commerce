import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight, Plus, Minus, Share2, Facebook, Twitter } from 'lucide-react';

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('black');
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState('description');
    const [showShareMenu, setShowShareMenu] = useState(false);

    const product = {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.5,
        reviews: 128,
        inStock: true,
        stockCount: 15,
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop"
        ],
        description: "Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and superior comfort for all-day wear.",
        features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Premium memory foam cushions",
            "Bluetooth 5.0 connectivity",
            "Built-in microphone",
            "Foldable design"
        ],
        specifications: {
            "Brand": "AudioTech Pro",
            "Model": "AT-WH1000",
            "Connectivity": "Bluetooth 5.0, 3.5mm jack",
            "Battery Life": "30 hours",
            "Charging Time": "2 hours",
            "Weight": "250g",
            "Color Options": "Black, White, Silver"
        },
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'black', hex: '#000000' },
            { name: 'white', hex: '#FFFFFF' },
            { name: 'silver', hex: '#C0C0C0' }
        ]
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
        ));
    };

    const handleQuantityChange = (action) => {
        if (action === 'increase' && quantity < product.stockCount) {
            setQuantity(quantity + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePrevImage = () => {
        setSelectedImage(selectedImage === 0 ? product.images.length - 1 : selectedImage - 1);
    };

    const handleNextImage = () => {
        setSelectedImage(selectedImage === product.images.length - 1 ? 0 : selectedImage + 1);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <ol className="flex items-center space-x-2 text-sm">
                    <li><a href="#" className="text-gray-500 hover:text-gray-700">Home</a></li>
                    <li className="text-gray-400">/</li>
                    <li><a href="#" className="text-gray-500 hover:text-gray-700">Electronics</a></li>
                    <li className="text-gray-400">/</li>
                    <li className="text-gray-900 font-medium">{product.name}</li>
                </ol>
            </nav>

            {/* Product Detail */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {product.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            selectedImage === index ? 'bg-white w-8' : 'bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                        selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Title and Rating */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    {renderStars(product.rating)}
                                    <span className="ml-2 text-gray-600">{product.rating}</span>
                                </div>
                                <a href="#reviews" className="text-blue-600 hover:text-blue-700">
                                    {product.reviews} reviews
                                </a>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                            {product.originalPrice && (
                                <>
                                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                                    <span className="text-sm font-semibold text-green-600">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                                </>
                            )}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                            <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? `In stock (${product.stockCount} available)` : 'Out of stock'}
              </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600">{product.description}</p>

                        {/* Color Selection */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                            <div className="flex space-x-3">
                                {product.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                                            selectedColor === color.name ? 'border-blue-500 scale-110' : 'border-gray-300'
                                        }`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <button className="text-sm text-blue-600 hover:text-blue-700">Size guide</button>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-2 px-4 border rounded-lg font-medium transition-all ${
                                            selectedSize === size
                                                ? 'border-blue-500 bg-blue-50 text-blue-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => handleQuantityChange('decrease')}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange('increase')}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    disabled={quantity >= product.stockCount}
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button
                                disabled={!product.inStock}
                                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors ${
                                    product.inStock
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                            </button>
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setShowShareMenu(!showShareMenu)}
                                    className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                                {showShareMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
                                        <div className="py-2">
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                                <Facebook className="w-4 h-4" />
                                                <span>Share on Facebook</span>
                                            </button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                                <Twitter className="w-4 h-4" />
                                                <span>Share on Twitter</span>
                                            </button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                                <Pinterest className="w-4 h-4" />
                                                <span>Share on Pinterest</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="border-t pt-6 space-y-3">
                            <div className="flex items-center space-x-3">
                                <Truck className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600">Free shipping on orders over $50</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Shield className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600">2-year warranty included</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <RefreshCw className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600">30-day return policy</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-16">
                    <div className="border-b">
                        <nav className="flex space-x-8">
                            {['description', 'features', 'specifications', 'reviews'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                                        activeTab === tab
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="py-8">
                        {activeTab === 'description' && (
                            <div className="prose max-w-none">
                                <p className="text-gray-600">
                                    {product.description} These premium wireless headphones deliver exceptional audio quality
                                    with deep bass and crystal-clear highs. The ergonomic design ensures comfortable wearing
                                    for extended periods, making them perfect for both work and leisure.
                                </p>
                                <p className="text-gray-600 mt-4">
                                    Whether you're commuting, working out, or relaxing at home, these headphones provide
                                    the perfect soundtrack to your day. The advanced noise cancellation technology blocks
                                    out unwanted background noise, allowing you to focus on what matters most.
                                </p>
                            </div>
                        )}

                        {activeTab === 'features' && (
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {activeTab === 'specifications' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between py-2 border-b">
                                        <span className="font-medium text-gray-900">{key}</span>
                                        <span className="text-gray-600">{value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div id="reviews" className="space-y-6">
                                <div className="text-center py-8">
                                    <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
                                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Write a Review
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;