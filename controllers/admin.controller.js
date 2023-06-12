function getProducts(req, res) {
  res.render("admin/products/all-products");
}

function getAddNewProduct(req, res) {
  res.render("admin/products/new-product");
}

function createNewProduct() {}

module.exports = {
  getProducts: getProducts,
  getAddNewProduct: getAddNewProduct,
  createNewProduct: createNewProduct,
};
