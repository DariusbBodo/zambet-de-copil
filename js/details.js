document.addEventListener('DOMContentLoaded', showProductDetails);

const url = 'https://668d7a4e099db4c579f31747.mockapi.io/products';

async function showProductDetails() {
	const urlSearchParam = new URLSearchParams(window.location.search);
	const productId = urlSearchParam.get('id');

	const response = await fetch(`${url}/${productId}`);
	const product = await response.json();

	document.querySelector('.main').innerHTML = `<h2>${product.details}</h2>`;
}
