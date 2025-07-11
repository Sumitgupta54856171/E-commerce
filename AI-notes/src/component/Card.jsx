import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Star, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

const ShoppingCartPage = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'cart'
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      category: "Electronics",
      rating: 4.8,
      reviews: 2847,
      description: "Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
      features: ["Active Noise Cancellation", "30-Hour Battery Life", "Premium Comfort Padding", "Bluetooth 5.0", "Quick Charge Technology"],
      inStock: true,
      freeShipping: true
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 399.99,
      originalPrice: 499.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      category: "Wearables",
      rating: 4.6,
      reviews: 1923,
      description: "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone integration in a sleek, water-resistant design.",
      features: ["Advanced Fitness Tracking", "Heart Rate Monitor", "GPS Navigation", "Water Resistant", "7-Day Battery Life"],
      inStock: true,
      freeShipping: true
    },
    {
      id: 3,
      name: "USB-C Fast Charger",
      price: 49.99,
      originalPrice: 69.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&crop=center",
      category: "Accessories",
      rating: 4.4,
      reviews: 856,
      description: "Ultra-fast charging technology with multiple device compatibility and advanced safety protection systems.",
      features: ["65W Fast Charging", "Universal Compatibility", "Safety Protection", "Compact Design", "LED Indicator"],
      inStock: true,
      freeShipping: false
    }
  ]);

  const [favorites, setFavorites] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getSavings = () => {
    return cartItems.reduce((total, item) => total + ((item.originalPrice - item.price) * item.quantity), 0);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  if (currentView === 'main') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechStore
              </h1>
              <button
                onClick={() => setCurrentView('cart')}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span className="font-semibold">Cart ({getTotalItems()})</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Discover our premium collection of tech products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full shadow-lg transition-colors ${
                        favorites.includes(product.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button className="p-2 bg-white text-gray-600 hover:text-blue-500 rounded-full shadow-lg transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SAVE ${(product.originalPrice - product.price).toFixed(0)}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        disabled={product.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold bg-gray-50 py-1 rounded">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {product.freeShipping && (
                      <div className="flex items-center text-green-600 text-sm">
                        <Truck size={16} className="mr-2" />
                        Free Shipping
                      </div>
                    )}
                    <div className="flex items-center text-gray-600 text-sm">
                      <Shield size={16} className="mr-2" />
                      2-Year Warranty
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <RotateCcw size={16} className="mr-2" />
                      30-Day Returns
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(product.id)}
                    className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Trash2 size={16} />
                    <span>Remove from Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentView('main')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="text-gray-500">({getTotalItems()} items)</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to get started</p>
            <button
              onClick={() => setCurrentView('main')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                          <div className="flex items-center space-x-1 mb-2">
                            {renderStars(item.rating)}
                            <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          {item.freeShipping && (
                            <span className="text-green-600 text-sm font-medium flex items-center">
                              <Truck size={14} className="mr-1" />
                              Free Shipping
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.originalPrice > item.price && (
                            <div className="text-sm text-gray-400 line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  {getSavings() > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Savings</span>
                      <span>-${getSavings().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">${(getTotalPrice() * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 mb-4">
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => setCurrentView('main')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
                >
                  Continue Shopping
                </button>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield size={16} className="mr-2 text-green-600" />
                    Secure checkout guaranteed
                  </div>
                  <div className="flex items-center">
                    <Truck size={16} className="mr-2 text-blue-600" />
                    Free shipping on orders over $50
                  </div>
                  <div className="flex items-center">
                    <RotateCcw size={16} className="mr-2 text-purple-600" />
                    Easy 30-day returns
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;