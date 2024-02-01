const filterReducer = (data, action) => {
	switch (action.type) {
		case "LOAD_FILTERED_PRODUCTS":
			return {
				...data,
				allProducts: [...action.payload],
				filteredProducts: [...action.payload.slice(0, action.count)],
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
				filteredProducts: [...data.allProducts.slice(0, action.count)],
			};
		case "SORT_PRODUCTS":
			return {
				...data,
				sortByValue: action.value,
			};
		default:
			break;
	}
};

export default filterReducer;
