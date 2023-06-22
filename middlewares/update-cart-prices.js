async function updateCartPrices(req, res, next) {
  const cart = res.locals.cart;

  //Update cart prices before we submit an order
  await cart.updatePrices();

  // req.session.cart = cart;
  next();
}

module.exports = updateCartPrices;
