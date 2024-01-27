const productReducer = (state, action) => {
	switch (action.type) {
		case "PRODUCTS_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "PRODUCTS_AVAILABLE":
			return {
				...state,
				isLoading: false,
				featuredProducts: action.payload.filter(
					(product) => product.featured === true
				),
				products: action.payload,
			};
		case "PRODUCTS_ERROR":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case "SINGLE_PRODUCT_LOADING":
			return {
				...state,
				isSingleLoading: true,
			};
		case "SINGLE_PRODUCT_AVAILABLE":
			return {
				...state,
				singleProduct: action.payload,
				isSingleLoading: false,
				isError: false,
			};
		case "SINGLE_PRODUCT_ERROR":
			return {
				...state,
				isSingleLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export default productReducer;
