document.addEventListener('DOMContentLoaded', () => {
    fetchFeaturedProducts();
});

async function fetchFeaturedProducts() {
    try {
        const response = await fetch('http://localhost:10000');  // Backend endpoint to get featured products
        const products = await response.json();

        const featuredContainer = document.getElementById('featured-products');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            featuredContainer.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function addToCart(productId) {
    // Handle adding the product to the cart (e.g., save to localStorage or send to server)
}
