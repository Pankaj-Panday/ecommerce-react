const productReducer = (state, action) => {
	switch (action.type) {
		case "data_loading":
			return {
				...state,
				isLoading: true,
			};
		case "data_available":
			return {
				...state,
				isLoading: false,
				featuredProducts: action.data.filter(
					(product) => product.featured === true
				),
				products: action.data,
			};
		case "data_error":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export default productReducer;
