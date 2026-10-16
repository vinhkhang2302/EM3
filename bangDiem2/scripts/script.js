// Grab the form and the table body, and prepare the list that stores all products
const form = document.getElementById("productForm");
const rows = document.getElementById("productRows");
const products = [];

// Build the table rows from the products array
function renderProducts() {
    rows.innerHTML = products.map((product, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${product.fullname}</td>
            <td>${product.idPro}</td>
            <td>${product.namePro}</td>
            <td>${product.quantityPro}</td>
            <td>${product.pricePro}</td>
            <td>${product.discount.toFixed(2)}</td>
            <td>${product.amount.toFixed(2)}</td>
            <td>${product.total.toFixed(2)}</td>
        </tr>`).join("");
}

// Read the form values and calculate Amount, Discount and Total
function readProduct() {
    const data = new FormData(form);
    const quantity = Number(data.get("quantityPro"));
    const price = Number(data.get("pricePro"));
    const amount = quantity * price;
    const discount = amount * 0.1; // 10% discount
    return {
        fullname: data.get("fullname"),
        idPro: data.get("idPro"),
        namePro: data.get("namePro"),
        quantityPro: quantity,
        pricePro: price,
        discount,
        amount,
        total: amount - discount
    };
}

// Save button: validate, store the product, then redraw the table
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    products.push(readProduct());
    renderProducts();
});

// Show button: redraw the table
document.getElementById("showButton").addEventListener("click", renderProducts);

// Reset button: also clear the stored products and the table
document.getElementById("resetButton").addEventListener("click", () => {
    products.length = 0;
    rows.innerHTML = "";
});
