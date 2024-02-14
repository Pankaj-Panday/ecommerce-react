import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";

const CartContext = createContext({});

function getCartItemsFromLocalStorage() {
	const items = localStorage.getItem("cartItems");
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

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
	}, [data.cartItems]);

	return (
		<CartContext.Provider
			value={{ ...data, addToCart, removeItemFromCart, clearAllItemsFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
