const filterReducer = (data, action) => {
	switch (action.type) {
		case "LOAD_FILTERED_PRODUCTS":
			return {
				...data,
				allProducts: [...action.payload],
				filteredProducts: [...action.payload],
			};
		case "SET_GRID_VIEW":
			return {
				...data,
				gridView: action.value,
			};
		case "SET_SORTBY_VALUE":
			let sortByInputField = document.getElementById("sortBy");
			let newSortByValue =
				sortByInputField.options[sortByInputField.selectedIndex].value;
			return {
				...data,
				sortByValue: newSortByValue,
			};
		case "SORT_PRODUCTS":
			let productsToSort = [...action.payload];
			switch (data.sortByValue) {
				case "ascending":
					productsToSort.sort(ascendingByPrice);
					break;
				case "descending":
					productsToSort.sort(descendingByPrice);
					break;
				case "a-z":
					productsToSort.sort(ascendingByName);
					break;
				case "z-a":
					productsToSort.sort(descendingByName);
					break;
				default:
					break;
			}
			return {
				...data,
				filteredProducts: [...productsToSort],
			};
		case "CHANGE_ITEMS_COUNT":
			return {
				...data,
			};
		default:
			break;
	}
};

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
	return product1.name.localeCompare(product2.name);
}

function descendingByName(product1, product2) {
	return product2.name.localeCompare(product1.name);
}

export default filterReducer;
