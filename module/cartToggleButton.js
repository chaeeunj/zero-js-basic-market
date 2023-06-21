import { makeDOMwithProperties } from "../utils/dom.js";
import { CART_COOKIE_KEY } from "../constants/cart.js";

const isInCart = ({ id }) => {
  // 현재 해당 상품이 장바구니 안에 있는지를 판단하여 결과를 반환
  const originalCartInfo = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
  // 바로 해당 값을 리턴함
  return !!originalCartInfo.find((cartInfo) => cartInfo.id === id);
}

const addCartInfo = (productInfo) => {
  // 장바구니에 해당 물품의 정보를 저장
  const originalCartInfo = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

 if (originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id) !== -1) return;

  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
    ...originalCartInfo, 
    productInfo,
  ]));
}

const removeCartInfo = () => {
  console.log('remove cartInfo');
}

export const getCartToggleButton = (productInfo) => {
  let inCart = isInCart(productInfo);
  const cartToggleBtn = makeDOMwithProperties('button', {
    className: 'cart-toggle-btn',
    type: 'button',
    onclick: () => {
      if (inCart) { // 이미 장바구니에 있다면
        removeCartInfo();
        cartImage.src = 'public/assets/cart.png';
      } else { // 장바구니에 없다면
        addCartInfo(productInfo);
        cartImage.src = 'public/assets/cartDisabled.png';
      }
      inCart = !inCart;
    }
  });

  const cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src: inCart ? 'public/assets/cartDisabled.png' : 'public/assets/cart.png',
  });

  cartToggleBtn.appendChild(cartImage);

  return cartToggleBtn;
}