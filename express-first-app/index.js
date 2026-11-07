const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

// Tell Express to use EJS for views, stored in the "views" folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use('/users', userRouter);
app.use('/products', productRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server chay tai http://localhost:${port}`);
});