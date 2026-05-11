function loadCheckout() {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  let container =
    document.getElementById("checkout-list");

  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {

    // chỉ lấy sản phẩm được tick
    if(!item.checked) return;

    let subtotal = item.price * item.quantity;

    total += subtotal;

    let div = document.createElement("div");

    div.className = "checkout-item";

    div.innerHTML = `

      <div class="product-info">

        <img src="${item.image}">

        <span>${item.name}</span>

      </div>

      <div>
        ${item.price.toLocaleString()}đ
      </div>

      <div>
        ${item.quantity}
      </div>

      <div>
        ${subtotal.toLocaleString()}đ
      </div>
    `;

    container.appendChild(div);

  });

  document.getElementById("total").innerText =
    "Tổng: " + total.toLocaleString() + "đ";
}

function placeOrder() {

  window.location.href = "payment.html";

}

loadCheckout();