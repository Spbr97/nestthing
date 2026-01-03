function updateCartCount() {
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;

  countEl.textContent = getCartCount();
}

updateCartCount();

