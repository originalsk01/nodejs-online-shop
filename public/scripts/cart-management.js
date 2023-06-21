const addToCartButtonElement = document.querySelector(
  "#product-details button"
);

const cartBadgeElement = document.querySelector(".nav-items .badge");

async function addToCart(event) {
  const productId = addToCartButtonElement.dataset.productid;
  const csrfToken = addToCartButtonElement.dataset.csrf;

  let response;

  try {
    response = await fetch("/cart/items", {
      method: "Post",
      body: JSON.stringify({
        productId: productId,
        _csrf: csrfToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert("Something went wrong!");
  }

  if (!response.ok) {
    alert("Something went wrong!");
    return;
  }

  const responseData = await response.json();

  const newTotalQuantity = responseData.newTotalItems;

  cartBadgeElement.textContent = newTotalQuantity;
}

addToCartButtonElement.addEventListener("click", addToCart);
