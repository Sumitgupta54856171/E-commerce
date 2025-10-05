import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Search, Filter } from 'lucide-react';

const ProductList = () => {
    const [products] = useState([
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            originalPrice: 399.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
            rating: 4.5,
            reviews: 128,
            category: "Electronics",
            inStock: true,
            badge: "Sale"
        },
        {
            id: 2,
            name: "Smart Watch Pro",
            price: 449.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
            rating: 4.8,
            reviews: 256,
            category: "Electronics",
            inStock: true,
            badge: "New"
        },
        {
            id: 3,
            name: "Organic Cotton T-Shirt",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
            rating: 4.2,
            reviews: 89,
            category: "Clothing",
            inStock: true,
            badge: null
        },
        {
            id: 4,
            name: "Professional Camera Lens",
            price: 1299.99,
            originalPrice: 1599.99,
            image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
            rating: 4.9,
            reviews: 45,
            category: "Photography",
            inStock: false,
            badge: "Limited"
        },
        {
            id: 5,
            name: "Minimalist Backpack",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
            rating: 4.6,
            reviews: 167,
            category: "Accessories",
            inStock: true,
            badge: null
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
            rating: 4.4,
            reviews: 203,
            category: "Electronics",
            inStock: true,
            badge: "Popular"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState("grid");
    const [likedProducts, setLikedProducts] = useState(new Set());

    const categories = ["All", "Electronics", "Clothing", "Photography", "Accessories"];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleLike = (productId) => {
        const newLiked = new Set(likedProducts);
        if (newLiked.has(productId)) {
            newLiked.delete(productId);
        } else {
            newLiked.add(productId);
        }
        setLikedProducts(newLiked);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1 className="text-2xl font-bold text-gray-900">Product Store</h1>
                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <Heart className="w-6 h-6" />
                                {likedProducts.size > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {likedProducts.size}
                  </span>
                                )}
                            </button>
                            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <ShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search and Filters */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>

                        {/* View Mode Toggle */}
                        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-3 py-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                            >
                                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                    <div className="bg-current rounded-sm"></div>
                                    <div className="bg-current rounded-sm"></div>
                                    <div className="bg-current rounded-sm"></div>
                                    <div className="bg-current rounded-sm"></div>
                                </div>
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`px-3 py-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                            >
                                <div className="w-4 h-4 flex flex-col gap-0.5">
                                    <div className="bg-current h-0.5 rounded-sm"></div>
                                    <div className="bg-current h-0.5 rounded-sm"></div>
                                    <div className="bg-current h-0.5 rounded-sm"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-gray-600">
                        Showing {filteredProducts.length} of {products.length} products
                    </p>
                </div>

                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isLiked={likedProducts.has(product.id)}
                                onToggleLike={() => toggleLike(product.id)}
                                renderStars={renderStars}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredProducts.map(product => (
                            <ProductListItem
                                key={product.id}
                                product={product}
                                isLiked={likedProducts.has(product.id)}
                                onToggleLike={() => toggleLike(product.id)}
                                renderStars={renderStars}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

// Product Card Component
const ProductCard = ({ product, isLiked, onToggleLike, renderStars }) => {
    return (
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Badge */}
            {product.badge && (
                <div className="absolute top-3 left-3 z-10">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              product.badge === 'Sale' ? 'bg-red-500 text-white' :
                  product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Limited' ? 'bg-orange-500 text-white' :
                          'bg-blue-500 text-white'
          }`}>
            {product.badge}
          </span>
                </div>
            )}

            {/* Wishlist Button */}
            <button
                onClick={onToggleLike}
                className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <Heart className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
            </button>

            {/* Product Image */}
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                </h3>

                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {renderStars(product.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
                        )}
                    </div>
                </div>

                <button
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        product.inStock
                            ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

// Product List Item Component (for list view)
const ProductListItem = ({ product, isLiked, onToggleLike, renderStars }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
            <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                    />
                    {product.badge && (
                        <span className={`absolute -top-2 -left-2 px-2 py-1 text-xs font-semibold rounded-full ${
                            product.badge === 'Sale' ? 'bg-red-500 text-white' :
                                product.badge === 'New' ? 'bg-green-500 text-white' :
                                    'bg-blue-500 text-white'
                        }`}>
              {product.badge}
            </span>
                    )}
                </div>

                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">{product.category}</p>

                            <div className="flex items-center mb-2">
                                <div className="flex items-center">
                                    {renderStars(product.rating)}
                                </div>
                                <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <button
                            onClick={onToggleLike}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                            {product.originalPrice && (
                                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
                            )}
                        </div>

                        <button
                            disabled={!product.inStock}
                            className={`py-2 px-6 rounded-lg font-medium transition-colors ${
                                product.inStock
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;