const express = require("express");
const {
  getAllProducts,
  createProduct,
  getAProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getAProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
