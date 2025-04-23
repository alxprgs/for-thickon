export const CART_KEY = 'local_cart';

export function loadCart() {
  const json = localStorage.getItem(CART_KEY);
  return json ? JSON.parse(json) : [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}