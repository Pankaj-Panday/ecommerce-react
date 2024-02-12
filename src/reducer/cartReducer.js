const cartReducer = (data, action) => {
	const { id, selectedColor, selectedSize, quantity, effectivePrice, product } =
		action.payload;
	switch (action.type) {
		case "ADD_TO_CART":
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
	}
};

export default cartReducer;
