const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
let cart = getCart();



if (cart.length === 0) {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  cartTotal.innerText = "";
} else {
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerText = "";
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => {
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

  // ✅ TOTAL comes from cart-utils.js
  cartTotal.innerText = `Total: ₹${getCartTotal()}`;
}


function removeItem(index) {
  cart.splice(index, 1);
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function changeQty(index, delta) {
  cart[index].qty += delta;

  if (cart[index].qty < 1) {
    cart[index].qty = 1;
  }

  saveCart(cart);
  updateCartCount();
  renderCart();
}



function goToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  window.location.href = "checkout.html";
}


