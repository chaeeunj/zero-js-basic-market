import { makeDOMwithProperties } from './utils/dom.js';
import { appendChildrenList } from './utils/dom.js';

const sectionDOM = document.getElementsByTagName('section')[0];

// 아래의 코드와 동일하지만 같은 과정이 여러번 반복되어 함수를 만들어 사용
// const productCard = document.createElement('div');
// productCard.className = 'product-card';
const productCard = makeDOMwithProperties('div', {
  className: 'product-card',
});

// --- product-image-con ---
const productImageCon = makeDOMwithProperties('div', {
  className: 'product-image-con',
});

const productImage = makeDOMwithProperties('img', {
  src: 'public/assets/파프리카.jpg',
  alt: '파프리카',
});

const cartToggleBtn = makeDOMwithProperties('button', {
  className: 'cart-toggle-btn',
  type: 'button',
});

const cartImage = makeDOMwithProperties('img', {
  className: 'cart-image',
  src: 'public/assets/cart.png',
});

cartToggleBtn.appendChild(cartImage);

appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
// --- product-image-con ---

// --- product-description ---
const productDescription = makeDOMwithProperties('div', {
  className: 'product-description',
});

const productName = makeDOMwithProperties('div', {
  className: 'product-name',
  innerHTML: '파프리카',
});

const productPriceContainer = makeDOMwithProperties('div', {
  className: 'product-price-con',
});

const productDiscount = makeDOMwithProperties('div', {
  className: 'product-discount-percent',
  innerHTML: '20%',
});

const productPrice = makeDOMwithProperties('div', {
  className: 'product-price',
  innerHTML: '2000원',
});

const productOriginalPrice = makeDOMwithProperties('div', {
  className: 'product-original-price',
  innerHTML: '2500원',
});

appendChildrenList(productPriceContainer, [productDiscount, productPrice]);
appendChildrenList(productDescription, [
  productName,
  productPriceContainer,
  productOriginalPrice,
]);
// --- product-description ---

appendChildrenList(productCard, [productImageCon, productDescription]);

sectionDOM.appendChild(productCard);
