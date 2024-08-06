export function mapProductToCard(product) {
	return `
				<div class="product-card flex-col gap-20 items-center justify-between">
					<h3 class="card-title">${product.name}</h3>
               <a href="../pages/details.html?id=${product.id}">
                  <img src=${product.imageUrl} width="150px"/>
               </a>
					<p class="card-price">${product.price} lei</p>
               <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.imageUrl}">Adauga in cos</button>
				</div>
      		`;
}

export function mapProductToAdminTableRow(product) {
	return `
            <tr>
               <td>${product.name}</td>
               <td>${product.price}</td>
               <td>
                  <a href="details.html?id=${product.id}">
                     <img src="../${product.imageUrl}" width="50px" />
                  </a>
               </td>
               <td>
                  <button class="edit-${product.id}">
                     <i class="fa-solid fa-pen-to-square">
                     </i>
                  </button>
               </td>
               <td>
                  <button class="delete-${product.id}">
                     <i class="fa-solid fa-trash"></i>
                  </button>
               </td>
               
            </tr>
            `;
}
