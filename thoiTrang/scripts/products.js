// Women's products
var nu = [
    { id: 1, name: "Áo nữ", price: 450000, img: "./images/nu1.jpg" },
    { id: 2, name: "Quần nữ", price: 320000, img: "./images/nu2.jpg" },
    { id: 3, name: "Váy nữ", price: 480000, img: "./images/nu3.jpg" },
    { id: 4, name: "Áo khoác nữ", price: 680000, img: "./images/nu4.jpg" }
];

// Men's products
var nam = [
    { id: 1, name: "Áo sơ mi nam", price: 350000, img: "./images/nam1.jpg" },
    { id: 2, name: "Quần nam", price: 400000, img: "./images/nam2.jpg" },
    { id: 3, name: "Áo khoác nam", price: 750000, img: "./images/nam3.jpg" },
    { id: 4, name: "Giày nam", price: 1200000, img: "./images/nam4.jpg" }
];

// Build a card for every product and add it to the page
function loadProducts() {
    // Women's section
    for (var i = 0; i < nu.length; i++) {
        var product = nu[i];
        var productHTML = `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price.toLocaleString()} VND</p>
                <button onclick="buyProduct('${product.name}')">Mua</button>
            </div>
        `;
        document.getElementById("women").innerHTML += productHTML;
    }

    // Men's section
    for (var i = 0; i < nam.length; i++) {
        var product = nam[i];
        var productHTML = `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price.toLocaleString()} VND</p>
                <button onclick="buyProduct('${product.name}')">Mua</button>
            </div>
        `;
        document.getElementById("men").innerHTML += productHTML;
    }
}

// Show a message when the "Mua" button is clicked
function buyProduct(productName) {
    alert("Đã mua " + productName);
}