const validateProduct = (req, res, next) => {
  const { name, price, category, stock } = req.body;
  
  const errors = [];

  if (!name || name.trim().length === 0) {
    errors.push('Product name is required');
  }

  if (!price || isNaN(price) || price < 0) {
    errors.push('Valid price is required');
  }

  if (!category || category.trim().length === 0) {
    errors.push('Category is required');
  }

  if (stock !== undefined && (isNaN(stock) || stock < 0)) {
    errors.push('Stock must be a non-negative number');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

module.exports = validateProduct;
