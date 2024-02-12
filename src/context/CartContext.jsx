import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";

const CartContext = createContext({});

const initialData = {
	cartItems: [],
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

	return (
		<CartContext.Provider value={{ ...data, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
