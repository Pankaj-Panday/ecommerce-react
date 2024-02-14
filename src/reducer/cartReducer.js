const cartReducer = (data, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const {
				id,
				selectedColor,
				selectedSize,
				quantity,
				effectivePrice,
				product,
			} = action.payload;
			const item = {
				id: id + selectedColor + selectedSize,
				name: product.name,
				color: selectedColor,
				size: selectedSize,
				quantity,
				price: effectivePrice,
				image: product.thumbnail,
			};
			return {
				...data,
				cartItems: [...data.cartItems, item],
			};
		case "REMOVE_FROM_CART":
			const itemIdToDelete = action.payload;
			const newCartItems = data.cartItems.filter(
				(item) => item.id !== itemIdToDelete
			);
			return {
				...data,
				cartItems: newCartItems,
			};
		case "CLEAR_CART":
			return {
				...data,
				cartItems: [],
			};
	}
};

export default cartReducer;
