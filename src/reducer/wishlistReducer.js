function wishlistReducer(data, action) {
	switch (action.type) {
		case "ADD_TO_WISHLIST":
			const newProduct = action.payload;
			return {
				...data,
				wishlist: [...data.wishlist, newProduct],
			};
		case "REMOVE_FROM_WISHLIST":
			const productId = action.payload;
			const newWishlist = data.wishlist.filter((product) => {
				return product.id !== productId;
			});
			return {
				...data,
				wishlist: newWishlist,
			};
	}
}

export default wishlistReducer;
