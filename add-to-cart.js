loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {

    if (!loggedInUser) {
      window.location.href = "login.html";
      return;
    }

    const cardBody = e.target.closest(".card-body");

    const name = cardBody.dataset.name;
    const price = parseFloat(cardBody.dataset.price);
    const img = cardBody.closest(".card").querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      item => item.name === name && item.user === loggedInUser.id
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({
        name,
        price,
        img,
        qty: 1,
        user: loggedInUser.id
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("toastMessage").innerHTML =
      `🛒 <b>${name}</b> added to cart successfully`;

    new bootstrap.Toast(
      document.getElementById("cartToast")
    ).show();
  }
});
