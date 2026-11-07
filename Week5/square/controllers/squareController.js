const Square = require('../models/square');

// Show the empty form (no result yet)
exports.showForm = (req, res) => {
    res.render('index', { perimeter: null, area: null });
};

// Calculate perimeter and area, save them, then show the result
exports.calculateSquare = async (req, res) => {
    const { sideLength } = req.body;
    const perimeter = 4 * sideLength;
    const area = sideLength * sideLength;

    const square = new Square({ sideLength, perimeter, area });

    await square.save();
    res.render('index', { perimeter, area });
};
