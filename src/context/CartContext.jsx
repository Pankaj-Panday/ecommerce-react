import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";

const CartContext = createContext({});

function getCartItemsFromLocalStorage() {
	const items = localStorage.getItem("cartItems");
	console.log(items);
	if (items) {
		return JSON.parse(items);
	} else {
		return [];
	}
}

const initialData = {
	cartItems: getCartItemsFromLocalStorage(),
	totalItems: 0,
	totalPrice: 0,
	shippingCharge: 0,
};

const CartContextProvider = ({ children }) => {
	const [data, dispatch] = useReducer(reducer, initialData);
	function addToCart(
		id,
		selectedColor,
		selectedSize,
		quantity,
		stock,
		effectivePrice,
		product
	) {
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				id,
				selectedColor,
				selectedSize,
				quantity,
				stock,
				effectivePrice,
				product,
			},
		});
	}

	function removeItemFromCart(id) {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	}

	function clearAllItemsFromCart() {
		dispatch({ type: "CLEAR_CART" });
	}

	function incrementQuantity(id) {
		dispatch({ type: "INCREMENT_QUANTITY", payload: id });
	}

	function decrementQuantity(id) {
		dispatch({ type: "DECREMENT_QUANTITY", payload: id });
	}

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
	}, [data.cartItems]);

	return (
		<CartContext.Provider
			value={{
				...data,
				addToCart,
				removeItemFromCart,
				clearAllItemsFromCart,
				incrementQuantity,
				decrementQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
