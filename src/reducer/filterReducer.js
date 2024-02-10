const filterReducer = (data, action) => {
	switch (action.type) {
		case "LOAD_ALL_PRODUCTS":
			const priceArray = action.payload.map((product) => {
				return ((100 - product.discountPercent) / 100) * product.price;
			});
			let maxValue = priceArray.reduce((result, curVal) => {
				return Math.max(result, curVal);
			}, 0);
			maxValue = Math.ceil(maxValue / 500) * 500; // so that maxValue will alwyas be a multiple of 500
			let minValue = priceArray.reduce((result, curVal) => {
				return Math.min(result, curVal);
			}, maxValue);
			minValue = Math.ceil(minValue / 500) * 500; // so that maxValue will alwyas be a multiple of 500
			return {
				...data,
				allProducts: [...action.payload],
				filteredProducts: [...action.payload],
				filters: {
					...data.filters,
					minPrice: minValue,
					maxPrice: maxValue,
					price: maxValue,
				},
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
		case "SORT_PRODUCTS": {
			let productsToSort = [...data.allProducts];
			const { searchText, category, rating } = data.filters;
			if (searchText || category || rating > -1) {
				productsToSort = [...data.filteredProducts];
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
		}
		case "SET_FILTER_VALUE":
			const { name, value } = action.payload;
			return {
				...data,
				filters: {
					...data.filters,
					[name]: value,
				},
			};

		case "SHOW_FILTERED_PRODUCTS":
			const { searchText, category, rating, color, price } = data.filters;
			let newFilteredProducts = [...data.allProducts];
			if (searchText) {
				newFilteredProducts = newFilteredProducts.filter((product) => {
					return product.name.toLowerCase().includes(searchText.toLowerCase());
				});
			}
			if (category && category.toLowerCase() !== "all") {
				newFilteredProducts = newFilteredProducts.filter((product) => {
					return product.category.toLowerCase() === category.toLowerCase();
				});
			}
			if (rating) {
				newFilteredProducts = newFilteredProducts.filter((product) => {
					return product.rating >= parseInt(rating);
				});
			}
			if (color.toLowerCase() !== "all") {
				newFilteredProducts = newFilteredProducts.filter((product) => {
					return product.colors.includes(color);
				});
			}
			if (price) {
				newFilteredProducts = newFilteredProducts.filter((product) => {
					const effectivePrice =
						((100 - product.discountPercent) / 100) * product.price;
					return effectivePrice <= price;
				});
			}
			return {
				...data,
				filteredProducts: newFilteredProducts,
			};
		case "CLEAR_FILTERS":
			return {
				...data,
				filters: {
					...data.filters,
					searchText: "",
					category: "all",
					rating: -1,
					color: "all",
					price: data.filters.maxPrice,
				},
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
