let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido al carrito');
}

function displayProducts() {
    const productContainer = document.querySelector('.advertisements');
    productContainer.innerHTML = '';

    const products = [
        { name: 'Nike Air Max', price: 120, image: 'images/descarga.png' },
        { name: 'Nike Tiempo', price: 150, image: 'images/2.png' },
        { name: 'Adidas Ultraboost', price: 150, image: 'images/adidas_ultraboost.png' },
        { name: 'Nike Air Max 270', price: 120, image: 'images/Nike Air Maz 270.png' },
        { name: 'Nike Air Zoom Pegasus 37', price: 150, image: 'images/nike_air_zoom_pegasus.png' },
        { name: 'Nike React Infinity Run Flyknit', price: 120, image: 'images/nike_react_infinity.png' },
        { name: 'Nike Zoom Freak 3', price: 150, image: 'images/nike_zoom_freak.png' },
        { name: 'Adidas Stan Smith', price: 120, image: 'images/adidas_stan_smith.png' },
        { name: 'Adidas Yeezy Boost 350 V2', price: 150, image: 'images/adidas_yeezy_boost.png' },
        { name: 'Adidas Samba', price: 150, image: 'images/adidas_samba.png' },
        
        // Agrega más productos aquí
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('ad');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${JSON.stringify(product)})">Añadir al carrito</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

displayProducts();
