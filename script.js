// Mock Product Data with Indian Pricing
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        rating: 4.5,
        reviews: 2341,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "Headphones",
        description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
        colors: ["Black", "White", "Blue"],
        sizes: [],
        stock: 50,
        featured: true,
        trending: true
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        price: 8999,
        originalPrice: 12999,
        discount: 31,
        rating: 4.7,
        reviews: 1892,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        category: "Smart Watches",
        description: "Advanced smartwatch with health monitoring, GPS, water resistance, and 7-day battery life.",
        colors: ["Black", "Silver", "Rose Gold"],
        sizes: [],
        stock: 35,
        featured: true,
        trending: true
    },
    {
        id: 3,
        name: "Laptop Stand Adjustable",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.3,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
        category: "Computer Accessories",
        description: "Ergonomic aluminum laptop stand with adjustable height and angle for comfortable viewing.",
        colors: ["Silver", "Space Gray"],
        sizes: [],
        stock: 100,
        featured: true,
        trending: false
    },
    {
        id: 4,
        name: "Wireless Gaming Mouse",
        price: 1999,
        originalPrice: 3499,
        discount: 43,
        rating: 4.6,
        reviews: 1456,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
        category: "Gaming Accessories",
        description: "High-precision gaming mouse with RGB lighting, programmable buttons, and 16000 DPI sensor.",
        colors: ["Black", "White", "RGB"],
        sizes: [],
        stock: 75,
        featured: true,
        trending: true
    },
    {
        id: 5,
        name: "Premium Cotton T-Shirt",
        price: 599,
        originalPrice: 999,
        discount: 40,
        rating: 4.4,
        reviews: 3241,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "T-Shirts",
        description: "100% premium cotton t-shirt with comfortable fit and durable fabric. Available in multiple colors.",
        colors: ["Black", "White", "Navy", "Gray", "Red"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 200,
        featured: false,
        trending: true
    },
    {
        id: 6,
        name: "Running Shoes Pro",
        price: 4999,
        originalPrice: 7999,
        discount: 38,
        rating: 4.8,
        reviews: 2156,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        category: "Shoes",
        description: "Professional running shoes with advanced cushioning, breathable mesh, and lightweight design.",
        colors: ["Black/Red", "White/Blue", "Gray"],
        sizes: ["6", "7", "8", "9", "10", "11"],
        stock: 80,
        featured: true,
        trending: true
    },
    {
        id: 7,
        name: "Mechanical Keyboard RGB",
        price: 4499,
        originalPrice: 6999,
        discount: 36,
        rating: 4.7,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?w=400",
        category: "Computer Accessories",
        description: "Premium mechanical keyboard with RGB backlighting, Cherry MX switches, and aluminum frame.",
        colors: ["Black", "White"],
        sizes: [],
        stock: 45,
        featured: true,
        trending: false
    },
    {
        id: 8,
        name: "Smartphone 128GB",
        price: 24999,
        originalPrice: 34999,
        discount: 29,
        rating: 4.6,
        reviews: 5678,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        category: "Mobile Phones",
        description: "Latest smartphone with 128GB storage, 6.5-inch display, triple camera, and all-day battery.",
        colors: ["Black", "White", "Blue", "Purple"],
        sizes: [],
        stock: 60,
        featured: true,
        trending: true
    },
    {
        id: 9,
        name: "Laptop 15.6\" i7",
        price: 59999,
        originalPrice: 79999,
        discount: 25,
        rating: 4.5,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        category: "Laptops",
        description: "Powerful laptop with Intel i7 processor, 16GB RAM, 512GB SSD, and dedicated graphics.",
        colors: ["Silver", "Space Gray"],
        sizes: [],
        stock: 25,
        featured: true,
        trending: false
    },
    {
        id: 10,
        name: "Wireless Earbuds Pro",
        price: 1999,
        originalPrice: 3499,
        discount: 43,
        rating: 4.4,
        reviews: 4532,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        category: "Headphones",
        description: "True wireless earbuds with active noise cancellation, 24-hour battery life, and premium sound.",
        colors: ["Black", "White"],
        sizes: [],
        stock: 150,
        featured: false,
        trending: true
    },
    {
        id: 11,
        name: "Designer Jeans",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.3,
        reviews: 2187,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        category: "Pants",
        description: "Premium denim jeans with comfortable stretch fabric and modern fit.",
        colors: ["Blue", "Black", "Gray"],
        sizes: ["28", "30", "32", "34", "36"],
        stock: 120,
        featured: false,
        trending: true
    },
    {
        id: 12,
        name: "Air Fryer 5L",
        price: 4999,
        originalPrice: 7999,
        discount: 38,
        rating: 4.6,
        reviews: 3456,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
        category: "Home Appliances",
        description: "Large capacity air fryer with digital controls, rapid heating, and easy cleanup.",
        colors: ["Black", "White"],
        sizes: [],
        stock: 40,
        featured: true,
        trending: false
    },
    {
        id: 13,
        name: "Gaming Headset 7.1",
        price: 3499,
        originalPrice: 5499,
        discount: 36,
        rating: 4.5,
        reviews: 1987,
        image: "https://images.unsplash.com/photo-1599669454699-248893623540?w=400",
        category: "Gaming Accessories",
        description: "Professional gaming headset with 7.1 surround sound, noise-canceling microphone, and RGB lighting.",
        colors: ["Black/Red", "Black/Blue"],
        sizes: [],
        stock: 55,
        featured: false,
        trending: true
    },
    {
        id: 14,
        name: "Organic Groceries Pack",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        rating: 4.7,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
        category: "Groceries",
        description: "Fresh organic vegetables and fruits pack, sourced directly from local farms.",
        colors: [],
        sizes: [],
        stock: 50,
        featured: true,
        trending: false
    },
    {
        id: 15,
        name: "Smart TV 43\" 4K",
        price: 34999,
        originalPrice: 49999,
        discount: 30,
        rating: 4.6,
        reviews: 2345,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        category: "Electronics",
        description: "4K Smart TV with HDR, built-in streaming apps, and voice control compatibility.",
        colors: ["Black"],
        sizes: [],
        stock: 30,
        featured: true,
        trending: false
    },
    {
        id: 16,
        name: "Fitness Band Tracker",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.4,
        reviews: 4567,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
        category: "Smart Watches",
        description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and 14-day battery.",
        colors: ["Black", "Blue", "Pink"],
        sizes: [],
        stock: 100,
        featured: false,
        trending: true
    }
];

// Categories Data with Premium Gradients
const categories = [
    { name: "Groceries", icon: "🛒", color: "from-emerald-400 to-emerald-600", gradient: "from-emerald-500 to-teal-500" },
    { name: "Electronics", icon: "📱", color: "from-blue-400 to-blue-600", gradient: "from-blue-500 to-cyan-500" },
    { name: "Computer Accessories", icon: "💻", color: "from-purple-400 to-purple-600", gradient: "from-purple-500 to-indigo-500" },
    { name: "Mobile Phones", icon: "📲", color: "from-pink-400 to-pink-600", gradient: "from-pink-500 to-rose-500" },
    { name: "Laptops", icon: "🖥️", color: "from-indigo-400 to-indigo-600", gradient: "from-indigo-500 to-purple-500" },
    { name: "Fashion", icon: "�", color: "from-fuchsia-400 to-fuchsia-600", gradient: "from-fuchsia-500 to-pink-500" },
    { name: "Shoes", icon: "👟", color: "from-red-400 to-red-600", gradient: "from-red-500 to-orange-500" },
    { name: "Headphones", icon: "🎧", color: "from-yellow-400 to-yellow-600", gradient: "from-yellow-500 to-amber-500" },
    { name: "Smart Watches", icon: "⌚", color: "from-cyan-400 to-cyan-600", gradient: "from-cyan-500 to-blue-500" },
    { name: "Gaming", icon: "🎮", color: "from-violet-400 to-violet-600", gradient: "from-violet-500 to-purple-500" },
    { name: "Home Appliances", icon: "🏠", color: "from-amber-400 to-amber-600", gradient: "from-amber-500 to-orange-500" },
    { name: "Beauty", icon: "💄", color: "from-rose-400 to-rose-600", gradient: "from-rose-500 to-pink-500" }
];

// State Management
let cart = JSON.parse(localStorage.getItem('glowcart_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('glowcart_wishlist')) || [];
let currentTheme = localStorage.getItem('glowcart_theme') || 'light';
let selectedProduct = null;

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const themeToggle = document.getElementById('theme-toggle');
const cartBtn = document.getElementById('cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const categoriesContainer = document.getElementById('categories-container');
const allCategoriesContainer = document.getElementById('all-categories-container');
const featuredProductsContainer = document.getElementById('featured-products');
const trendingProductsContainer = document.getElementById('trending-products');
const searchInput = document.getElementById('search-input');
const mobileSearchInput = document.getElementById('mobile-search-input');
const toastContainer = document.getElementById('toast-container');
const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
const backToHomeBtn = document.getElementById('back-to-home');
const backToHomeFromCategoriesBtn = document.getElementById('back-to-home-from-categories');
const productDetailsContent = document.getElementById('product-details-content');
const checkoutContent = document.getElementById('checkout-content');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCart();
    renderFeaturedProducts();
    renderTrendingProducts();
    renderAllCategories();
    initEventListeners();
    
    // Hide splash screen after animation
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 3000);
});

// Theme Management
function initTheme() {
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('glowcart_theme', currentTheme);
}

// Cart Management
function initCart() {
    updateCartUI();
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('glowcart_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    mobileCartCount.textContent = totalItems;
    cartSubtotal.textContent = `₹${subtotal.toLocaleString()}`;
    cartTotal.textContent = `₹${subtotal.toLocaleString()}`;

    renderCartItems();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-12">
                <svg class="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <p class="text-gray-400">Your cart is empty</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="flex gap-4 glass-card rounded-lg p-3 animate-slide-up">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
            <div class="flex-1">
                <h4 class="font-semibold text-white text-sm line-clamp-2">${item.name}</h4>
                <p class="text-cyan-400 font-bold mt-1">₹${item.price.toLocaleString()}</p>
                <div class="flex items-center gap-2 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                    </button>
                    <span class="font-semibold text-white">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        </div>
    `).join('');
}

// Wishlist Management
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist!', 'success');
    }
    localStorage.setItem('glowcart_wishlist', JSON.stringify(wishlist));
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

// Render Categories
function renderCategories() {
    if (!categoriesContainer) return;
    categoriesContainer.innerHTML = categories.map((category, index) => `
        <div class="category-card flex-shrink-0 w-24 md:w-32 cursor-pointer transition-transform duration-300 animate-slide-up" style="animation-delay: ${index * 0.05}s" onclick="filterByCategory('${category.name}')">
            <div class="bg-gradient-to-br ${category.gradient} rounded-2xl p-4 md:p-6 text-center shadow-lg relative overflow-hidden">
                <div class="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span class="text-3xl md:text-4xl relative z-10">${category.icon}</span>
                <p class="text-white text-xs md:text-sm font-medium mt-2 line-clamp-2 relative z-10">${category.name}</p>
            </div>
        </div>
    `).join('');
}

// Render All Categories for Categories Page
function renderAllCategories() {
    if (!allCategoriesContainer) return;
    allCategoriesContainer.innerHTML = categories.map((category, index) => `
        <div class="category-card cursor-pointer animate-slide-up" style="animation-delay: ${index * 0.05}s" onclick="filterByCategory('${category.name}')">
            <div class="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div class="relative z-10">
                    <span class="text-4xl md:text-5xl">${category.icon}</span>
                </div>
                <span class="text-white text-sm md:text-base font-medium text-center relative z-10">${category.name}</span>
            </div>
        </div>
    `).join('');
}

// Render Products
function renderFeaturedProducts() {
    const featured = products.filter(p => p.featured);
    featuredProductsContainer.innerHTML = featured.map((product, index) => createProductCard(product, index)).join('');
}

function renderTrendingProducts() {
    const trending = products.filter(p => p.trending);
    trendingProductsContainer.innerHTML = trending.map((product, index) => createProductCard(product, index)).join('');
}

function createProductCard(product, index) {
    const isWishlisted = isInWishlist(product.id);
    return `
        <div class="product-card glass-card rounded-2xl overflow-hidden transition-all duration-300 animate-slide-up cursor-pointer" style="animation-delay: ${index * 0.05}s" onclick="showProductDetails(${product.id})">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-40 md:h-48 object-cover">
                <div class="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                    -${product.discount}%
                </div>
                <button onclick="event.stopPropagation(); toggleWishlist(${product.id})" class="absolute top-2 right-2 w-8 h-8 glass-card rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <svg class="w-5 h-5 ${isWishlisted ? 'text-cyan-400 fill-current' : 'text-gray-400'}" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>
            </div>
            <div class="p-3 md:p-4">
                <h3 class="font-semibold text-white text-sm md:text-base line-clamp-2 mb-2">${product.name}</h3>
                <div class="flex items-center gap-1 mb-2">
                    <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="text-xs text-gray-400">${product.rating} (${product.reviews})</span>
                </div>
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <span class="text-lg font-bold text-cyan-400">₹${product.price.toLocaleString()}</span>
                        <span class="text-sm text-gray-500 line-through ml-2">₹${product.originalPrice.toLocaleString()}</span>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); addToCart(${product.id})" class="w-full btn-primary py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Product Details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;
    const isWishlisted = isInWishlist(product.id);

    productDetailsContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <div class="glass-card rounded-2xl p-8 mb-4">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-64 md:h-96 object-contain">
                </div>
                <div class="flex gap-2 overflow-x-auto hide-scrollbar">
                    ${[1, 2, 3, 4].map(i => `
                        <div class="flex-shrink-0 w-20 h-20 glass-card rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-400 transition-all">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div>
                <div class="flex items-start justify-between mb-4">
                    <span class="bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-xs px-3 py-1 rounded-full font-medium">${product.category}</span>
                    <button onclick="toggleWishlist(${product.id})" class="p-2 glass-card rounded-full transition-colors">
                        <svg class="w-6 h-6 ${isWishlisted ? 'text-cyan-400 fill-current' : 'text-gray-400'}" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                </div>
                <h1 class="text-2xl md:text-3xl font-bold text-white mb-4">${product.name}</h1>
                <div class="flex items-center gap-4 mb-6">
                    <div class="flex items-center gap-1">
                        ${[1, 2, 3, 4, 5].map(i => `
                            <svg class="w-5 h-5 ${i <= Math.floor(product.rating) ? 'text-cyan-400' : 'text-gray-600'}" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        `).join('')}
                    </div>
                    <span class="text-gray-400">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="mb-6">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl font-bold text-cyan-400">₹${product.price.toLocaleString()}</span>
                        <span class="text-xl text-gray-500 line-through">₹${product.originalPrice.toLocaleString()}</span>
                        <span class="bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-sm px-2 py-1 rounded-full">${product.discount}% OFF</span>
                    </div>
                    <p class="text-cyan-400 text-sm">In Stock (${product.stock} available)</p>
                </div>
                <p class="text-gray-400 mb-6">${product.description}</p>
                
                ${product.colors.length > 0 ? `
                <div class="mb-6">
                    <h3 class="font-semibold text-white mb-3">Color</h3>
                    <div class="flex gap-2">
                        ${product.colors.map((color, i) => `
                            <button class="px-4 py-2 border-2 ${i === 0 ? 'border-cyan-400' : 'border-white/20'} rounded-lg text-sm text-white hover:border-cyan-400 transition-colors">
                                ${color}
                            </button>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${product.sizes.length > 0 ? `
                <div class="mb-6">
                    <h3 class="font-semibold text-white mb-3">Size</h3>
                    <div class="flex gap-2">
                        ${product.sizes.map((size, i) => `
                            <button class="w-12 h-12 border-2 ${i === 0 ? 'border-cyan-400' : 'border-white/20'} rounded-lg text-sm font-medium text-white hover:border-cyan-400 transition-colors">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="flex gap-4 mb-8">
                    <button onclick="addToCart(${product.id})" class="flex-1 btn-primary py-3 rounded-full text-white font-semibold shadow-lg">
                        Add to Cart
                    </button>
                    <button onclick="buyNow(${product.id})" class="flex-1 bg-white/10 border border-white/20 text-white py-3 rounded-full font-semibold hover:bg-white/20 transition-colors">
                        Buy Now
                    </button>
                </div>
                
                <div class="border-t border-white/10 pt-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold text-white text-sm">Free Delivery</p>
                                <p class="text-xs text-gray-400">Orders over ₹999</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold text-white text-sm">Secure Payment</p>
                                <p class="text-xs text-gray-400">100% Protected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Similar Products -->
        <div class="mt-12">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-6">Similar Products</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map((p, i) => createProductCard(p, i)).join('')}
            </div>
        </div>
    `;

    showPage('product-details');
}

function buyNow(productId) {
    addToCart(productId);
    showCheckout();
}

// Checkout
function showCheckout() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= 999 ? 0 : 99;
    const total = subtotal + delivery;

    checkoutContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Order Summary -->
            <div class="glass-card rounded-2xl p-6">
                <h3 class="text-xl font-bold text-white mb-6">Order Summary</h3>
                <div class="space-y-4 mb-6">
                    ${cart.map(item => `
                        <div class="flex gap-4">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                            <div class="flex-1">
                                <h4 class="font-semibold text-white text-sm line-clamp-2">${item.name}</h4>
                                <p class="text-gray-400 text-sm">Qty: ${item.quantity}</p>
                            </div>
                            <p class="font-bold text-cyan-400">₹${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="border-t border-white/10 pt-4 space-y-2">
                    <div class="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>₹${subtotal.toLocaleString()}</span>
                    </div>
                    <div class="flex justify-between text-gray-400">
                        <span>Delivery</span>
                        <span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span>
                    </div>
                    <div class="flex justify-between text-xl font-bold text-white pt-2">
                        <span>Total</span>
                        <span class="text-cyan-400">₹${total.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            
            <!-- Payment Details -->
            <div class="glass-card rounded-2xl p-6">
                <h3 class="text-xl font-bold text-white mb-6">Payment Method</h3>
                
                <!-- Delivery Address -->
                <div class="mb-6">
                    <h4 class="font-semibold text-white mb-3">Delivery Address</h4>
                    <div class="space-y-3">
                        <input type="text" placeholder="Full Name" class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all">
                        <input type="text" placeholder="Phone Number" class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all">
                        <textarea placeholder="Address" rows="3" class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"></textarea>
                        <div class="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="City" class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all">
                            <input type="text" placeholder="PIN Code" class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all">
                        </div>
                    </div>
                </div>
                
                <!-- Payment Options -->
                <div class="mb-6">
                    <h4 class="font-semibold text-white mb-3">Payment Method</h4>
                    <div class="space-y-3">
                        <label class="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400/50 transition-colors">
                            <input type="radio" name="payment" value="upi" class="w-5 h-5 text-cyan-400 focus:ring-cyan-400" checked>
                            <div class="flex-1">
                                <p class="text-white font-medium">UPI</p>
                                <p class="text-gray-400 text-sm">Pay using any UPI app</p>
                            </div>
                        </label>
                        <label class="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400/50 transition-colors">
                            <input type="radio" name="payment" value="card" class="w-5 h-5 text-cyan-400 focus:ring-cyan-400">
                            <div class="flex-1">
                                <p class="text-white font-medium">Credit/Debit Card</p>
                                <p class="text-gray-400 text-sm">Visa, Mastercard, RuPay</p>
                            </div>
                        </label>
                        <label class="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400/50 transition-colors">
                            <input type="radio" name="payment" value="cod" class="w-5 h-5 text-cyan-400 focus:ring-cyan-400">
                            <div class="flex-1">
                                <p class="text-white font-medium">Cash on Delivery</p>
                                <p class="text-gray-400 text-sm">Pay when you receive</p>
                            </div>
                        </label>
                    </div>
                </div>
                
                <button onclick="placeOrder()" class="w-full btn-primary py-3 rounded-full text-white font-semibold shadow-lg">
                    Place Order - ₹${total.toLocaleString()}
                </button>
                
                <p class="text-center text-xs text-gray-500 mt-4">
                    By placing this order, you agree to our Terms & Conditions
                </p>
            </div>
        </div>
    `;

    showPage('checkout');
}

function placeOrder() {
    showToast('Order placed successfully! 🎉', 'success');
    cart = [];
    saveCart();
    updateCartUI();
    setTimeout(() => {
        showPage('home');
    }, 2000);
}

// Page Navigation
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    
    if (pageName === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
    } else if (pageName === 'product-details') {
        document.getElementById('product-details-page').classList.remove('hidden');
    } else if (pageName === 'checkout') {
        document.getElementById('checkout-page').classList.remove('hidden');
    } else if (pageName === 'categories') {
        document.getElementById('categories-page').classList.remove('hidden');
        renderAllCategories();
    }
    
    // Update bottom nav
    bottomNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });
}

// Search Functionality
function handleSearch(query) {
    if (!query) {
        renderFeaturedProducts();
        renderTrendingProducts();
        return;
    }

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );

    featuredProductsContainer.innerHTML = filtered.length > 0 
        ? filtered.map((product, index) => createProductCard(product, index)).join('')
        : '<p class="col-span-full text-center text-gray-500 py-12">No products found</p>';
    
    trendingProductsContainer.innerHTML = '';
}

function filterByCategory(categoryName) {
    const filtered = products.filter(p => p.category === categoryName);
    featuredProductsContainer.innerHTML = filtered.length > 0 
        ? filtered.map((product, index) => createProductCard(product, index)).join('')
        : '<p class="col-span-full text-center text-gray-500 py-12">No products found in this category</p>';
    trendingProductsContainer.innerHTML = '';
    showToast(`Showing ${categoryName}`, 'info');
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg glass-card ${
        type === 'success' ? 'border-l-4 border-cyan-400' : type === 'error' ? 'border-l-4 border-red-400' : 'border-l-4 border-purple-400'
    } text-white`;
    toast.innerHTML = `
        <svg class="w-5 h-5 ${type === 'success' ? 'text-cyan-400' : type === 'error' ? 'text-red-400' : 'text-purple-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${type === 'success' 
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
            }
        </svg>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Cart Drawer
function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.remove('hidden');
    setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10);
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.add('opacity-0');
    setTimeout(() => cartOverlay.classList.add('hidden'), 300);
}

// Event Listeners
function initEventListeners() {
    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', () => {
        closeCart();
        showCheckout();
    });
    
    // Search
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    
    // Bottom Navigation
    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page === 'cart') {
                openCart();
            } else if (page === 'home') {
                showPage('home');
                renderFeaturedProducts();
                renderTrendingProducts();
            } else if (page === 'categories') {
                showPage('categories');
            } else {
                showToast('Coming soon!', 'info');
            }
        });
    });
    
    // Back to Home
    backToHomeBtn.addEventListener('click', () => showPage('home'));
    backToHomeFromCategoriesBtn.addEventListener('click', () => showPage('home'));
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleWishlist = toggleWishlist;
window.showProductDetails = showProductDetails;
window.buyNow = buyNow;
window.placeOrder = placeOrder;
window.filterByCategory = filterByCategory;
