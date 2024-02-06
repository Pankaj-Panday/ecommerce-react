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
			return {
				...data,
				sortByValue: action.value,
			};
		case "SORT_PRODUCTS":
			let productsToSort = [];
			if (data.filters.searchText) {
				productsToSort = [...data.filteredProducts];
			} else {
				productsToSort = [...data.allProducts];
			}
			function compareFunc(product1, product2) {
				switch (data.sortByValue) {
					case "ascending": {
						const product1EffectivePrice =
							((100 - product1.discountPercent) * product1.price) / 100;
						const product2EffectivePrice =
							((100 - product2.discountPercent) * product2.price) / 100;
						return product1EffectivePrice - product2EffectivePrice;
					}
					case "descending": {
						const product1EffectivePrice =
							((100 - product1.discountPercent) * product1.price) / 100;
						const product2EffectivePrice =
							((100 - product2.discountPercent) * product2.price) / 100;
						return product2EffectivePrice - product1EffectivePrice;
					}
					case "a-z":
						return product1.name.localeCompare(product2.name);
					case "z-a":
						return product2.name.localeCompare(product1.name);
					default:
						break;
				}
			}
			const sortedProducts = productsToSort.sort(compareFunc);
			return {
				...data,
				filteredProducts: sortedProducts,
			};

		case "SET_FILTER_VALUE":
			const { name, value } = action.payload;
			return {
				...data,
				filters: {
					...data.filters,
					[name]: value,
				},
			};

		case "SHOW_SEARCHED_PRODUCTS":
			const { searchText } = data.filters;
			const newFilteredProducts = data.allProducts.filter((product) => {
				return product.name.toLowerCase().includes(searchText.toLowerCase());
			});
			return {
				...data,
				filteredProducts: newFilteredProducts,
			};
		case "CHANGE_ITEMS_COUNT":
			return {
				...data,
			};
		default:
			break;
	}
};

export default filterReducer;
