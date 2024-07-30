import { getProductById } from '../api/products.js';

document.addEventListener('DOMContentLoaded', async () => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	const cartItemsContainer = document.querySelector('.cart-items');
	const cartTotalContainer = document.querySelector('.cart-total');

	console.log(cart);

	async function updateCart() {
		cartItemsContainer.innerHTML = '';
		let total = 0;

		for (let id in cart) {
			const product = await getProductById(id);
			product.quantity = cart[id].quantity;

			const productCard = document.createElement('div');
			productCard.className = 'flex justify-between items-center w-200';
			productCard.innerHTML = `
            <span>${product.name}</span>
            <div>
               <button class="decrease">-</button>
               <span>${product.quantity}</span>
               <button class="increase">+</button>
            </div>
         `;
			cartItemsContainer.appendChild(productCard);
		}
	}

	await updateCart();
});
