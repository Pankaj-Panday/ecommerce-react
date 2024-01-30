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
		default:
			break;
	}
};

export default filterReducer;
