const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({}).sort("price");
    res.status(200).json({ product, count: product.length });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

const getAProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getAProduct,
  updateProduct,
  deleteProduct,
};
