const cartReducer = (data, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const {
				id,
				selectedColor,
				selectedSize,
				quantity,
				stock,
				effectivePrice,
				product,
			} = action.payload;

			const newItem = {
				id: id + selectedColor + selectedSize,
				name: product.name,
				color: selectedColor,
				size: selectedSize,
				quantity,
				stock,
				price: effectivePrice,
				image: product.thumbnail,
			};

			const foundProduct = data.cartItems.find((item) => {
				return item.id === newItem.id;
			});

			if (foundProduct) {
				const newCartItems = data.cartItems.map((item) => {
					if (item.id === newItem.id) {
						let newQuantity = item.quantity + newItem.quantity;
						console.log(newQuantity);
						return {
							...item,
							quantity: newQuantity > stock ? stock : newQuantity,
						};
					}
					return { ...item };
				});
				return {
					...data,
					cartItems: newCartItems,
				};
			}

			return {
				...data,
				cartItems: [...data.cartItems, newItem],
			};
		}
		case "INCREMENT_QUANTITY": {
			const itemIdtoUpdate = action.payload;
			const newCartItems = data.cartItems.map((item) => {
				if (item.id === itemIdtoUpdate) {
					return {
						...item,
						quantity:
							item.quantity >= item.stock ? item.stock : item.quantity + 1,
					};
				} else {
					return item;
				}
			});
			return {
				...data,
				cartItems: newCartItems,
			};
		}
		case "DECREMENT_QUANTITY": {
			const itemIdtoUpdate = action.payload;
			const newCartItems = data.cartItems.map((item) => {
				if (item.id === itemIdtoUpdate) {
					return {
						...item,
						quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
					};
				} else {
					return item;
				}
			});
			return {
				...data,
				cartItems: newCartItems,
			};
		}
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
		case "CALCULATE_TOTALS": {
			const { totalItems, totalPrice } = data.cartItems.reduce(
				(total, item) => {
					return {
						totalItems: total.totalItems + item.quantity,
						totalPrice: total.totalPrice + item.price * item.quantity,
					};
				},
				{
					totalItems: 0,
					totalPrice: 0,
				}
			);
			const shippingCharge =
				totalPrice > 0 ? Math.min(50 + 0.01 * totalPrice, 200) : 0;
			return {
				...data,
				totalItems: totalItems,
				totalPrice: totalPrice,
				shippingCharge: shippingCharge,
			};
		}
	}
};

export default cartReducer;
