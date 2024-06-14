const { Product } = require('../models');


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, categoryId } = req.body;
    const product = await Product.create({ name, price, description, categoryId });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, categoryId } = req.body;
    const [updated] = await Product.update({ name, price, description, categoryId }, { where: { id } });
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { id } });
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
