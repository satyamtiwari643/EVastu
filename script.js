// 20 Products Data in INR (₹)
const products = [
    { id: 1, title: "Wireless Headphones", price: 2999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", desc: "High bass, active noise cancellation bluetooth headphones with 20h battery life." },
    { id: 2, title: "Smart Fitness Watch", price: 3499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", desc: "AMOLED display, heart rate sensor, and waterproof fitness tracker." },
    { id: 3, title: "Pro Running Shoes", price: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", desc: "Lightweight and breathable sports shoes for maximum comfort." },
    { id: 4, title: "RGB Gaming Headset", price: 1499, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", desc: "Surround sound 7.1 mic headset with customizable RGB lighting." },
    { id: 5, title: "Casual Sneakers", price: 1799, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80", desc: "Trendy everyday sneakers suitable for both men and women." },
    { id: 6, title: "5G Smartphone", price: 24999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80", desc: "128GB Storage, 108MP Quad Camera, fast charging battery." },
    { id: 7, title: "DSLR Camera", price: 45999, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80", desc: "Professional 24.1 MP DSLR camera with 18-55mm lens." },
    { id: 8, title: "Bluetooth Speaker", price: 1299, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80", desc: "Portable waterproof speaker with deep bass and punchy sound." },
    { id: 9, title: "Gaming Laptop", price: 68999, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80", desc: "Intel i7 12th Gen, RTX 3050 graphics card, 16GB RAM." },
    { id: 10, title: "Classic Sunglasses", price: 799, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80", desc: "UV400 protected stylish sunglasses for outdoor protection." },
    { id: 11, title: "Leather Wallet", price: 699, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80", desc: "Genuine leather bifold wallet with multiple card slots." },
    { id: 12, title: "Power Bank 20000mAh", price: 1599, image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=500&q=80", desc: "Fast charging power bank with dual USB output ports." },
    { id: 13, title: "Wireless Earbuds", price: 1899, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", desc: "TWS earbuds with touch control and low latency gaming mode." },
    { id: 14, title: "Mechanical Keyboard", price: 2499, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", desc: "RGB backlit mechanical keyboard with tactile blue switches." },
    { id: 15, title: "Wireless Gaming Mouse", price: 999, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80", desc: "Ergonomic wireless mouse with adjustable DPI up to 6400." },
    { id: 16, title: "Backpack for Travel", price: 1199, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", desc: "Water-resistant laptop travel bag with USB charging port." },
    { id: 17, title: "Analog Men's Watch", price: 2199, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80", desc: "Premium stainless steel strap analog watch for formal wear." },
    { id: 18, title: "Coffee Mug Set", price: 499, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80", desc: "Ceramic handcrafted coffee mugs set of 2." },
    { id: 19, title: "Denim Jacket", price: 2299, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80", desc: "Classic blue denim jacket with comfortable cotton fabric." },
    { id: 20, title: "Electric Kettle", price: 899, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=500&q=80", desc: "1.5L Stainless steel electric kettle with auto cut-off." }
];

let cart = [];

// Display Products
const productGrid = document.getElementById('product-grid');

function loadProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            </div>
            <div class="card-buttons">
                <button class="btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn-buy" onclick="buyNow(${product.id})">Buy Now</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Add to Cart Logic
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    alert(`${item.title} added to cart!`);
}

// Buy Now Logic
function buyNow(id) {
    const item = products.find(p => p.id === id);
    alert(`Proceeding to instant checkout for: ${item.title} (₹${item.price.toLocaleString('en-IN')})`);
}

// Update Cart UI
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    
    const cartContainer = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('cart-total-price');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart-msg">Your cart is currently empty.</p>';
        totalPriceElement.innerText = '0';
        return;
    }
    
    cartContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item');
        itemRow.innerHTML = `
            <div>
                <strong>${item.title}</strong>
                <p style="font-size:12px; color:#666;">₹${item.price.toLocaleString('en-IN')}</p>
            </div>
            <button onclick="removeFromCart(${index})" style="background:red; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Remove</button>
        `;
        cartContainer.appendChild(itemRow);
    });
    
    totalPriceElement.innerText = total.toLocaleString('en-IN');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Product Modal Popup
const productModal = document.getElementById('product-modal');
let selectedProductId = null;

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    selectedProductId = id;
    
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-price').innerText = `₹${product.price.toLocaleString('en-IN')}`;
    document.getElementById('modal-desc').innerText = product.desc;
    
    productModal.style.display = 'flex';
}

document.getElementById('close-product-modal').onclick = () => productModal.style.display = 'none';
document.getElementById('modal-add-cart').onclick = () => { addToCart(selectedProductId); productModal.style.display = 'none'; };
document.getElementById('modal-buy-now').onclick = () => { buyNow(selectedProductId); productModal.style.display = 'none'; };

// Cart Modal Popup
const cartModal = document.getElementById('cart-modal');
document.getElementById('open-cart-btn').onclick = () => cartModal.style.display = 'flex';
document.getElementById('close-cart-modal').onclick = () => cartModal.style.display = 'none';

document.getElementById('checkout-btn').onclick = () => {
    if(cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for shopping with EVastu! Order Placed Successfully.');
        cart = [];
        updateCartUI();
        cartModal.style.display = 'none';
    }
};

// Window Click to Close Modals
window.onclick = (e) => {
    if (e.target === productModal) productModal.style.display = 'none';
    if (e.target === cartModal) cartModal.style.display = 'none';
};

// Initial Load
loadProducts();