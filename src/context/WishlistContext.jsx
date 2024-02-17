import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/wishlistReducer.js";

const WishlistContext = createContext({});

const initialData = {
	wishlist: [],
};

const WishlistContextProvider = ({ children }) => {
	const [data, dispatch] = useReducer(reducer, initialData);
	return (
		<WishlistContext.Provider value={{ ...data }}>
			{children}
		</WishlistContext.Provider>
	);
};

function useWishlistContext() {
	return useContext(WishlistContext);
}

export { WishlistContextProvider };
