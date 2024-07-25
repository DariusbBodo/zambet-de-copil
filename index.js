import { getAllProducts } from './api/products.js';
import { mapProductToCard } from './utils/layout.js';

document.addEventListener('DOMContentLoaded', displayAllProducts);
const mainContainer = document.querySelector('.main');

async function displayAllProducts() {
	const products = await getAllProducts();
	mainContainer.innerHTML = products.map(mapProductToCard).join(' ');
}
