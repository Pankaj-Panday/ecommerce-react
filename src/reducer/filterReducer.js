const filterReducer = (data, action) => {
	switch (action.type) {
		case "LOAD_FILTERED_PRODUCTS":
			return {
				...data,
				allProducts: [...action.payload],
				filteredProducts: applyFilters(action.payload, data),
			};
		case "SET_GRID_VIEW":
			return {
				...data,
				gridView: action.value,
			};
		case "CHANGE_ITEMS_COUNT":
			return {
				...data,
				itemCount: action.count,
				filteredProducts: applyFilters(data.filteredProducts, data),
			};
		case "SORT_PRODUCTS":
			return {
				...data,
				sortByValue: action.value,
				filteredProducts: applyFilters(data.allProducts, data),
			};
		default:
			break;
	}
};

function applyFilters(products, filters) {
	console.log("triggered");
	let filteredProducts = [...products];
	if (filters.sortByValue) {
		let sortedProducts = [...products];
		switch (filters.sortByValue) {
			case "ascending":
				sortedProducts.sort(ascendingByPrice);
				break;
			case "descending":
				sortedProducts.sort(descendingByPrice);
				break;
			case "a-z":
				sortedProducts.sort(ascendingByName);
				break;
			case "z-a":
				sortedProducts.sort(descendingByName);
				break;
		}
		filteredProducts = sortedProducts;
	}

	return filteredProducts.slice(0, filters.itemCount);
}

function ascendingByPrice(product1, product2) {
	const product1EffectivePrice =
		((100 - product1.discountPercent) * product1.price) / 100;
	const product2EffectivePrice =
		((100 - product2.discountPercent) * product2.price) / 100;
	return product1EffectivePrice - product2EffectivePrice;
}

function descendingByPrice(product1, product2) {
	const product1EffectivePrice =
		((100 - product1.discountPercent) * product1.price) / 100;
	const product2EffectivePrice =
		((100 - product2.discountPercent) * product2.price) / 100;
	return product2EffectivePrice - product1EffectivePrice;
}

function ascendingByName(product1, product2) {
	if (product1.name > product2.name) return 1;
	if (product1.name < product2.name) return -1;
	else return 0;
}

function descendingByName(product1, product2) {
	if (product1.name > product2.name) return -1;
	if (product1.name < product2.name) return 1;
	else return 0;
}

export default filterReducer;
