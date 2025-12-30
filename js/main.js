function viewProduct(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product.html";
}
renderProducts(products);