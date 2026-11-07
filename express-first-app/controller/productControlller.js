// Sample product data (in a real app this would come from a database)
const products = [
  { id: 1, name: 'Laptop- vnuk', price: 1500 },
  { id: 2, name: 'Điện thoại', price: 800 },
  { id: 3, name: 'Tai nghe', price: 100 }
];

// Show the whole product list using the "products.ejs" view
const getProducts = async (req, res) => {
  res.render('products', { products });
};

// Show a single product, found by the id in the URL
const getProductById = async (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) {
    res.send(`<h1>${product.name}</h1> <p>Gia: ${product.price}</p>`);
  } else {
    res.send("<h1>Khong co san pham trong danh sach</h1>");
  }
};

module.exports = { getProducts, getProductById };