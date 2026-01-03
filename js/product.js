const productId = localStorage.getItem("selectedProductId");

const product = products.find(p => p.id === productId);

const container = document.getElementById("productDetail");

if (!product) {
  container.innerHTML = "<p>Product not found.</p>";
} else {
  container.innerHTML = `
    <div class="product-page">
      <div class="product-page-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-page-info">
        <h2>${product.name}</h2>
        <p class="price">₹${product.price}</p>
        <p class="desc">
          High-quality, everyday essential designed for daily use.
        </p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>
    </div>
  `;
}


function addToCart() {
  let cart = getCart();

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
  updateCartCount();
  window.location.href = "cart.html";
}
