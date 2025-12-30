const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  cartTotal.innerText = "";
} else {
  renderCart();
}

function renderCart() {
  let total = 0;

  cartItemsContainer.innerHTML = cart.map((item, index) => {
    total += item.price * item.qty;

    return `
  <div class="cart-item">
    <img class="cart-thumb" src="${item.image}" alt="${item.name}">

    <div class="cart-info">
      <h4>${item.name}</h4>
      <p class="cart-price">₹${item.price}</p>
      <div class="cart-qty">
  <button onclick="changeQty(${index}, -1)">−</button>
  <span>${item.qty}</span>
  <button onclick="changeQty(${index}, 1)">+</button>
</div>


      <button class="btn-sm" onclick="removeItem(${index})">
        Remove
      </button>
    </div>
  </div>
`;
  }).join("");

  cartTotal.innerText = `Total: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
function changeQty(index, delta) {
  cart[index].qty += delta;

  if (cart[index].qty < 1) {
    cart[index].qty = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

