import { getAllProducts } from './api/products.js';
import { mapProductToCard } from './utils/layout.js';

document.addEventListener('DOMContentLoaded', displayAllProducts);
const mainContainer = document.querySelector('.main');
const colorFilterContainer = document.querySelector('.colors');

async function displayAllProducts() {
	const products = await getAllProducts();
	mainContainer.innerHTML = products.map(mapProductToCard).join(' ');

	const addToCartButtons = document.querySelectorAll('.add-to-cart');

	addToCartButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const productId = button.getAttribute('data-id');
			const price = button.getAttribute('data-price');
			const name = button.getAttribute('data-name');
			const imageUrl = button.getAttribute('data-image');

			let cart = JSON.parse(localStorage.getItem('cart')) || {};
			if (cart[productId]) {
				cart[productId].quantity += 1;
			} else {
				cart[productId] = {
					quantity: 1,
					price: price,
					name: name,
					imageUrl: imageUrl,
				};
			}

			localStorage.setItem('cart', JSON.stringify(cart));
		});
	});

	const colors = products.map((product) => product.color);
	const uniqueColors = Array.from(new Set(colors));

	colorFilterContainer.innerHTML += uniqueColors
		.map(
			(color) =>
				`
			<div class="color-filter ${
				color === 'multicolor' ? 'multicolor' : ''
			}" style="background: ${color === 'multicolor' ? '' : color}"
				data-color=${color}
				>
			</div>
		`
		)
		.join('');

	colorFilterContainer.addEventListener('click', (e) => {
		if (e.target.classList.contains('color-filter')) {
			const color = e.target.getAttribute('data-color');
			mainContainer.innerHTML = products
				.filter((product) => product.color == color)
				.map(mapProductToCard)
				.join(' ');
		}
	});
}
