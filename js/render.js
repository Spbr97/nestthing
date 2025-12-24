function renderProducts(productList) {
  const grid = document.getElementById("productGrid");

  if (!grid) return; // safety check

  grid.innerHTML = productList.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p class="price">₹${product.price}</p>
      <button class="btn-sm">View</button>
    </div>
  `).join("");
}
