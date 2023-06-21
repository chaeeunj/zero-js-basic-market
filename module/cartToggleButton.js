import { makeDOMwithProperties } from "../utils/dom.js";
import { CART_COOKIE_KEY } from "../constants/cart.js";

const addCartInfo = (productInfo) => {
  // 장바구니에 해당 물품의 정보를 저장
  const originalCartInfo = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

 if (originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id) !== -1) return;

  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
    ...originalCartInfo, 
    productInfo,
  ]));
}

export const getCartToggleButton = (productInfo) => {
  const cartToggleBtn = makeDOMwithProperties('button', {
    className: 'cart-toggle-btn',
    type: 'button',
    onclick: () => {
      addCartInfo(productInfo);
    }
  });

  const cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src: 'public/assets/cart.png',
  });

  cartToggleBtn.appendChild(cartImage);

  return cartToggleBtn;
}