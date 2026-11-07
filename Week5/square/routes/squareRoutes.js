const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');

// GET /            -> show the form
router.get('/', squareController.showForm);

// POST /calculate  -> receive the form and calculate
router.post('/calculate', squareController.calculateSquare);

module.exports = router;
